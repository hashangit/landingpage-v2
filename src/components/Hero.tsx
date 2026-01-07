"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import CalModal, { useCalModal } from "./CalModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.45, 0.32, 0.9],
    },
  },
} as const;

function MagneticButton({
  children,
  className,
  href,
  onClick
}: {
  children: React.ReactNode;
  className: string;
  href?: string;
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: mouseX, y: mouseY }} className="w-full sm:w-auto">
      {href ? (
        <Link
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={className}
        >
          {children}
        </Link>
      ) : (
        <motion.button
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={className}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}

function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yDeep = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -200]);

  React.useEffect(() => {
    setMounted(true);
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000 };

    const colors = ["#0F172A", "#1b5299", "#10B981"];
    const nodeCount = 48;
    const connectionRadius = 180;
    const gravityRadius = 250;
    const slingshotRadius = 60;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseOpacity: number;
    }

    let nodes: Node[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = Array.from({ length: nodeCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseOpacity: Math.random() * 0.3 + 0.5, // 0.5 to 0.8 opacity range
      }));
    };

    const update = () => {
      nodes.forEach((node) => {
        // Apply velocity
        node.x += node.vx;
        node.y += node.vy;

        // Mouse Physics (Gravity/Slingshot)
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < gravityRadius) {
          // Attract
          const force = (gravityRadius - dist) / gravityRadius;
          node.vx += (dx / dist) * force * 0.15;
          node.vy += (dy / dist) * force * 0.15;

          if (dist < slingshotRadius) {
            // Repel / Slingshot
            const repelForce = (slingshotRadius - dist) / slingshotRadius;
            node.vx -= (dx / dist) * repelForce * 2.0;
            node.vy -= (dy / dist) * repelForce * 2.0;
          }
        }

        // Friction / Speed limit
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Bounce edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Edges
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionRadius) {
            const alpha = (1 - dist / connectionRadius) * 0.2;
            ctx.strokeStyle = `rgba(27, 82, 153, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      nodes.forEach((node) => {
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.baseOpacity;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
    };

    const loop = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background Base */}
      <div className="absolute inset-0 bg-white" />

      {/* Deep Layer (Blobs) */}
      <motion.div style={{ y: yDeep }} className="absolute inset-0 opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] bg-brand-teal/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-brand-blue/10 rounded-full blur-[100px]" />
      </motion.div>

      {/* Neural Graph Layer */}
      <motion.canvas
        ref={canvasRef}
        style={{ y: yMid }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Premium Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}

export default function Hero() {
  const { open: openCalModal } = useCalModal();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <ParallaxBackground />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-1.5 mb-8 text-sm font-bold tracking-wider text-brand-blue uppercase bg-brand-blue/5 border border-brand-blue/10 rounded-full">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Reliable Transport for Your Care Team
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-navy mb-8 leading-[1.1]">
              Driver-Led Transport Support for{" "}
              <span className="relative inline-block md:whitespace-nowrap">
                <span
                  className="bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #10B981 0%, #10B981 70%, #1b5299 85%, #10B981 100%)',
                  }}
                >
                  Home Care Providers
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              We provide the drivers and vehicles so your carers can focus on care. No more worrying about how your team gets to their next visit.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton
              onClick={openCalModal}
              className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-brand-blue/30 transition-shadow flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
            </MagneticButton>

            <MagneticButton
              href="#how-it-works"
              className="w-full sm:w-auto px-10 py-5 bg-white text-brand-navy border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-brand-blue/20 transition-all flex items-center justify-center gap-2"
            >
              How It Works
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6 text-sm text-gray-500 font-semibold"
          >
            {[
              "Reliable Transport",
              "Zero Missed Visits",
              "Focus on Care",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05, color: "#111827" }}
              >
                <div className="relative">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5 + (i * 0.2), duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  />
                </div>
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <CalModal
        calLink={process.env.NEXT_PUBLIC_CAL_COM_LINK || "hasslefreecare/30min"}
        calDomain={process.env.NEXT_PUBLIC_CAL_DOMAIN}
      />
    </section>
  );
}
