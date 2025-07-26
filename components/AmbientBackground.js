"use client";

import React, { useEffect, useRef } from "react";
import SimplexNoise from "@/app/noise.min.js";

export function AmbientBackground() {
    const canvasRef = useRef(null);
    const simplex = new SimplexNoise();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const particleCount = 700;
        const particlePropCount = 9;
        const particlePropsLength = particleCount * particlePropCount;
        const rangeY = 100;
        const baseTTL = 50;
        const rangeTTL = 150;
        const baseSpeed = 0.1;
        const rangeSpeed = 2;
        const baseRadius = 1;
        const rangeRadius = 4;
        const baseHue = 158;
        const rangeHue = 10;
        const noiseSteps = 8;
        const xOff = 0.00125;
        const yOff = 0.00125;
        const zOff = 0.0005;
        const backgroundColor = "#000000";

        let tick = 0;
        let particleProps = new Float32Array(particlePropsLength);
        let center = [canvas.width / 2, canvas.height / 2];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 677;
            center = [canvas.width / 2, canvas.height / 2];
        };

        const rand = (n) => Math.random() * n;
        const randRange = (n) => n - rand(n * 2);
        const fadeInOut = (t, m) => (t < m * 0.3 ? t / (m * 0.3) : (t > m * 0.7 ? (m - t) / (m * 0.3) : 1));
        const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

        function initParticles() {
            tick = 0;
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                initParticle(i);
            }
        }

        function initParticle(i) {
            let x = rand(canvas.width);
            let y = center[1] + randRange(rangeY);
            let vx = 0;
            let vy = 0;
            let life = 0;
            let ttl = baseTTL + rand(rangeTTL);
            let speed = baseSpeed + rand(rangeSpeed);
            let radius = baseRadius + rand(rangeRadius);
            let hue = baseHue + rand(rangeHue);

            particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
        }

        function drawParticles() {
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                updateParticle(i);
            }
        }

        function updateParticle(i) {
            let i2 = 1 + i,
                i3 = 2 + i,
                i4 = 3 + i,
                i5 = 4 + i,
                i6 = 5 + i,
                i7 = 6 + i,
                i8 = 7 + i,
                i9 = 8 + i;

            let x = particleProps[i];
            let y = particleProps[i2];
            let n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * Math.PI * 2;
            let vx = lerp(particleProps[i3], Math.cos(n), 0.5);
            let vy = lerp(particleProps[i4], Math.sin(n), 0.5);
            let life = particleProps[i5];
            let ttl = particleProps[i6];
            let speed = particleProps[i7];
            let x2 = x + vx * speed;
            let y2 = y + vy * speed;
            let radius = particleProps[i8];
            let hue = particleProps[i9];

            drawParticle(x, y, x2, y2, life, ttl, radius, hue);

            life++;

            particleProps[i] = x2;
            particleProps[i2] = y2;
            particleProps[i3] = vx;
            particleProps[i4] = vy;
            particleProps[i5] = life;

            if (x > canvas.width || x < 0 || y > canvas.height || y < 0 || life > ttl) {
                initParticle(i);
            }
        }

        function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
            ctx.save();
            ctx.lineCap = "round";
            ctx.lineWidth = radius;
            ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }

        function draw() {
            tick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawParticles();
            requestAnimationFrame(draw);
        }

        window.addEventListener("resize", resize);
        resize();
        initParticles();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[677px] z-0" />;
};
