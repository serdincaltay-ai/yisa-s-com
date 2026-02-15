'use client'

import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  TrendingUp,
  Users,
  UserCog,
  CreditCard,
  LayoutGrid,
  Building2,
  Shield,
  ShoppingBag,
  CheckSquare,
  MessageSquare,
  Dumbbell,
  Cpu,
  Lock,
  Database,
  Bot,
} from 'lucide-react'
import { SERVICES, ROBOTS } from '@/lib/knowledge/yisas'
import { useInView } from '@/hooks/use-in-view'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ClipboardCheck,
  TrendingUp,
  Users,
  UserCog,
  CreditCard,
  LayoutGrid,
  Building2,
  Shield,
  ShoppingBag,
  CheckSquare,
  MessageSquare,
  Dumbbell,
}

const ROBOT_ICONS = [Cpu, Lock, Database, Bot]

export default function FeaturesSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const { ref: robotRef, isInView: robotVisible } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="ozellikler" className="section relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
            {'12 Hizmet, S\u0131n\u0131rs\u0131z Potansiyel'}
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-pretty">
            {'Spor okulu y\u00f6netiminin t\u00fcm ihtiya\u00e7lar\u0131n\u0131 tek platformda kar\u015f\u0131l\u0131yoruz.'}
          </p>
        </motion.div>

        {/* 12 Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.iconName] || CheckSquare
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group card card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0f3460]/30 border border-[#00d4ff]/10 flex items-center justify-center mb-4 group-hover:border-[#00d4ff]/30 transition-colors">
                  <Icon size={22} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* 4 Robots section */}
        <div ref={robotRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={robotVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
              {'4 Robot, Tek Sistem'}
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-pretty">
              {'Yapay zeka destekli robotlar\u0131m\u0131z, her biri farkl\u0131 bir g\u00f6rev i\u00e7in optimize edilmi\u015ftir.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROBOTS.map((robot, i) => {
              const Icon = ROBOT_ICONS[i]
              return (
                <motion.div
                  key={robot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={robotVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative p-6 rounded-2xl border border-white/[0.08] bg-[#0c1220] overflow-hidden group hover:border-opacity-40 transition-all"
                  style={{ ['--robot-color' as string]: robot.color }}
                >
                  {/* Glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: robot.color }}
                  />

                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${robot.color}20` }}
                    >
                      <Icon size={26} style={{ color: robot.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{robot.name}</h3>
                    <p className="text-xs font-medium mb-3" style={{ color: robot.color }}>
                      {robot.role}
                    </p>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{robot.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
