"use client";

import { motion } from "framer-motion";

type StatItem = {
    value: string;
    label: string;
    description?: string;
    color: string;
};

type Props = {
    title?: string;
    items: StatItem[];
};

export default function UditStats({
    title = "Quick Stats",
    items,
}: Props) {
    return (
        <section className="udit-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="udit-section-title"
            >
                {title}
            </motion.h2>

            <div className="udit-stats-grid">
                {items.map((item, i) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: i * 0.08,
                        }}
                        className="udit-stat-card">
                        <h3
                            className="udit-stat-value"
                            style={{ color: item.color }}>
                            {item.value}
                        </h3>

                        <p className="udit-timeline-company">
                            {item.label}
                        </p>

                        {item.description && (
                            <p className="udit-stat-description">
                                {item.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}