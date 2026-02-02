/**
 * Centinela - Main JavaScript
 * Theme Management, Navigation, Knowledge Graph Visualizations
 */

// ==========================================================================
// Theme Manager
// ==========================================================================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('centinela-theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.setupToggle();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('centinela-theme', theme);
    }

    toggle() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    setupToggle() {
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.addEventListener('click', () => this.toggle());
        });
    }
}

// ==========================================================================
// Navigation Manager
// ==========================================================================
class NavigationManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollBehavior();
        this.setupSmoothScroll();
    }

    setupMobileMenu() {
        if (this.menuToggle && this.navMenu) {
            this.menuToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.menuToggle.classList.toggle('active');
            });

            this.navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    this.navMenu.classList.remove('active');
                    this.menuToggle.classList.remove('active');
                });
            });
        }
    }

    setupScrollBehavior() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (this.navbar) {
                this.navbar.classList.toggle('scrolled', currentScroll > 100);
            }
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
}

// ==========================================================================
// Advanced Knowledge Graph Visualization
// ==========================================================================
class KnowledgeGraphAdvanced {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.edges = [];
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.animationId = null;
        this.time = 0;

        // Configuration
        this.config = {
            nodeCount: options.nodeCount || 50,
            maxConnections: options.maxConnections || 3,
            connectionDistance: options.connectionDistance || 200,
            particleSpeed: options.particleSpeed || 2,
            showLabels: options.showLabels !== false,
            showParticles: options.showParticles !== false,
            interactive: options.interactive !== false,
            pulseNodes: options.pulseNodes !== false,
            ...options
        };

        // Node categories with colors
        this.categories = [
            { name: 'Data', color: '#6366f1', items: ['Sales Data', 'Revenue', 'Inventory', 'Orders', 'Transactions'] },
            { name: 'Entity', color: '#8b5cf6', items: ['Customers', 'Products', 'Suppliers', 'Employees', 'Partners'] },
            { name: 'Metric', color: '#a855f7', items: ['KPI', 'Growth', 'Margin', 'ROI', 'Conversion', 'CAC', 'LTV'] },
            { name: 'Process', color: '#ec4899', items: ['Forecast', 'Pipeline', 'Workflow', 'Budget', 'Planning'] },
            { name: 'Insight', color: '#14b8a6', items: ['Trend', 'Anomaly', 'Pattern', 'Correlation', 'Prediction'] }
        ];

        this.init();
    }

    init() {
        this.resize();
        this.createNodes();
        this.createEdges();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';

        this.ctx.scale(dpr, dpr);
        this.width = rect.width;
        this.height = rect.height;
    }

    createNodes() {
        this.nodes = [];
        const padding = 60;

        for (let i = 0; i < this.config.nodeCount; i++) {
            const category = this.categories[Math.floor(Math.random() * this.categories.length)];
            const label = category.items[Math.floor(Math.random() * category.items.length)];

            this.nodes.push({
                id: i,
                x: padding + Math.random() * (this.width - padding * 2),
                y: padding + Math.random() * (this.height - padding * 2),
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 4 + 4,
                baseRadius: Math.random() * 4 + 4,
                label: label,
                category: category.name,
                color: category.color,
                showLabel: Math.random() > 0.6,
                pulsePhase: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.02,
                connections: 0,
                highlighted: false
            });
        }
    }

    createEdges() {
        this.edges = [];

        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const distances = [];

            // Calculate distances to all other nodes
            for (let j = 0; j < this.nodes.length; j++) {
                if (i !== j) {
                    const other = this.nodes[j];
                    const dist = Math.hypot(other.x - node.x, other.y - node.y);
                    distances.push({ index: j, dist });
                }
            }

            // Sort by distance and connect to nearest nodes
            distances.sort((a, b) => a.dist - b.dist);
            const connectCount = Math.min(this.config.maxConnections, distances.length);

            for (let k = 0; k < connectCount; k++) {
                const targetIndex = distances[k].index;
                const exists = this.edges.some(e =>
                    (e.source === i && e.target === targetIndex) ||
                    (e.source === targetIndex && e.target === i)
                );

                if (!exists && distances[k].dist < this.config.connectionDistance) {
                    this.edges.push({
                        source: i,
                        target: targetIndex,
                        strength: 1 - (distances[k].dist / this.config.connectionDistance)
                    });
                    this.nodes[i].connections++;
                    this.nodes[targetIndex].connections++;
                }
            }
        }
    }

    createParticles() {
        if (!this.config.showParticles) return;

        this.particles = [];
        const particleCount = Math.min(this.edges.length * 0.3, 30);

        for (let i = 0; i < particleCount; i++) {
            const edgeIndex = Math.floor(Math.random() * this.edges.length);
            this.particles.push({
                edgeIndex: edgeIndex,
                progress: Math.random(),
                speed: (0.5 + Math.random() * 1) * 0.01,
                size: 2 + Math.random() * 2,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createEdges();
        });

        if (this.config.interactive) {
            this.canvas.addEventListener('mousemove', (e) => {
                const rect = this.canvas.getBoundingClientRect();
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;

                // Highlight nearby nodes
                this.nodes.forEach(node => {
                    const dist = Math.hypot(this.mouse.x - node.x, this.mouse.y - node.y);
                    node.highlighted = dist < this.mouse.radius;
                });
            });

            this.canvas.addEventListener('mouseleave', () => {
                this.mouse.x = null;
                this.mouse.y = null;
                this.nodes.forEach(node => node.highlighted = false);
            });
        }
    }

    update() {
        this.time += 0.016; // ~60fps

        // Update nodes
        this.nodes.forEach(node => {
            // Movement
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges with padding
            const padding = 30;
            if (node.x < padding || node.x > this.width - padding) {
                node.vx *= -1;
                node.x = Math.max(padding, Math.min(this.width - padding, node.x));
            }
            if (node.y < padding || node.y > this.height - padding) {
                node.vy *= -1;
                node.y = Math.max(padding, Math.min(this.height - padding, node.y));
            }

            // Pulse animation
            if (this.config.pulseNodes) {
                node.pulsePhase += node.pulseSpeed;
                node.radius = node.baseRadius * (1 + Math.sin(node.pulsePhase) * 0.2);
            }

            // Mouse interaction - attract nodes gently
            if (this.mouse.x && this.mouse.y && this.config.interactive) {
                const dx = this.mouse.x - node.x;
                const dy = this.mouse.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.mouse.radius && dist > 0) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius * 0.01;
                    node.vx += dx * force;
                    node.vy += dy * force;

                    // Damping
                    node.vx *= 0.98;
                    node.vy *= 0.98;
                }
            }
        });

        // Update particles
        this.particles.forEach(particle => {
            particle.progress += particle.speed * particle.direction;

            if (particle.progress > 1 || particle.progress < 0) {
                // Reset to a new random edge
                particle.edgeIndex = Math.floor(Math.random() * this.edges.length);
                particle.progress = particle.direction > 0 ? 0 : 1;
                particle.direction = Math.random() > 0.5 ? 1 : -1;
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

        // Draw edges (connections)
        this.edges.forEach(edge => {
            const source = this.nodes[edge.source];
            const target = this.nodes[edge.target];
            const dist = Math.hypot(target.x - source.x, target.y - source.y);

            if (dist < this.config.connectionDistance * 1.2) {
                const alpha = (1 - dist / (this.config.connectionDistance * 1.2)) * edge.strength;

                // Gradient line
                const gradient = this.ctx.createLinearGradient(source.x, source.y, target.x, target.y);

                if (isDark) {
                    gradient.addColorStop(0, `rgba(99, 102, 241, ${alpha * 0.6})`);
                    gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.4})`);
                    gradient.addColorStop(1, `rgba(99, 102, 241, ${alpha * 0.6})`);
                } else {
                    gradient.addColorStop(0, `rgba(70, 56, 134, ${alpha * 0.5})`);
                    gradient.addColorStop(0.5, `rgba(99, 102, 241, ${alpha * 0.3})`);
                    gradient.addColorStop(1, `rgba(70, 56, 134, ${alpha * 0.5})`);
                }

                this.ctx.strokeStyle = gradient;
                this.ctx.lineWidth = 1.5 + alpha;
                this.ctx.beginPath();
                this.ctx.moveTo(source.x, source.y);
                this.ctx.lineTo(target.x, target.y);
                this.ctx.stroke();

                // Highlight connected edges on hover
                if (source.highlighted || target.highlighted) {
                    this.ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.8)' : 'rgba(70, 56, 134, 0.6)';
                    this.ctx.lineWidth = 2.5;
                    this.ctx.stroke();
                }
            }
        });

        // Draw particles traveling along edges
        if (this.config.showParticles) {
            this.particles.forEach(particle => {
                const edge = this.edges[particle.edgeIndex];
                if (!edge) return;

                const source = this.nodes[edge.source];
                const target = this.nodes[edge.target];

                const x = source.x + (target.x - source.x) * particle.progress;
                const y = source.y + (target.y - source.y) * particle.progress;

                // Particle glow
                const glowGradient = this.ctx.createRadialGradient(x, y, 0, x, y, particle.size * 4);
                glowGradient.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.8)' : 'rgba(70, 56, 134, 0.6)');
                glowGradient.addColorStop(1, 'transparent');

                this.ctx.fillStyle = glowGradient;
                this.ctx.beginPath();
                this.ctx.arc(x, y, particle.size * 4, 0, Math.PI * 2);
                this.ctx.fill();

                // Particle core
                this.ctx.fillStyle = isDark ? '#a5b4fc' : '#6366f1';
                this.ctx.beginPath();
                this.ctx.arc(x, y, particle.size, 0, Math.PI * 2);
                this.ctx.fill();
            });
        }

        // Draw nodes
        this.nodes.forEach(node => {
            const isHighlighted = node.highlighted;
            const scale = isHighlighted ? 1.3 : 1;

            // Outer glow
            const glowSize = (node.radius * 4 + (isHighlighted ? 10 : 0)) * scale;
            const glowGradient = this.ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, glowSize
            );

            const glowColor = isHighlighted ? node.color : (isDark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(70, 56, 134, 0.3)');
            glowGradient.addColorStop(0, glowColor);
            glowGradient.addColorStop(1, 'transparent');

            this.ctx.fillStyle = glowGradient;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
            this.ctx.fill();

            // Node ring (for connected nodes)
            if (node.connections > 2) {
                this.ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(70, 56, 134, 0.2)';
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, node.radius * 2 * scale, 0, Math.PI * 2);
                this.ctx.stroke();
            }

            // Node core
            const nodeGradient = this.ctx.createRadialGradient(
                node.x - node.radius * 0.3, node.y - node.radius * 0.3, 0,
                node.x, node.y, node.radius * scale
            );
            nodeGradient.addColorStop(0, isHighlighted ? '#ffffff' : (isDark ? '#a5b4fc' : '#818cf8'));
            nodeGradient.addColorStop(1, isHighlighted ? node.color : (isDark ? '#6366f1' : '#463886'));

            this.ctx.fillStyle = nodeGradient;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
            this.ctx.fill();

            // Label
            if (this.config.showLabels && (node.showLabel || isHighlighted)) {
                this.ctx.font = isHighlighted ? 'bold 12px Inter, sans-serif' : '10px Inter, sans-serif';
                this.ctx.fillStyle = isDark
                    ? (isHighlighted ? '#ffffff' : 'rgba(177, 181, 221, 0.7)')
                    : (isHighlighted ? '#1A152D' : 'rgba(70, 56, 134, 0.7)');

                const labelX = node.x + node.radius * scale + 8;
                const labelY = node.y + 4;

                // Label background
                if (isHighlighted) {
                    const metrics = this.ctx.measureText(node.label);
                    this.ctx.fillStyle = isDark ? 'rgba(26, 21, 45, 0.9)' : 'rgba(255, 255, 255, 0.9)';
                    this.ctx.fillRect(labelX - 4, labelY - 12, metrics.width + 8, 18);
                    this.ctx.fillStyle = isDark ? '#ffffff' : '#1A152D';
                }

                this.ctx.fillText(node.label, labelX, labelY);

                // Category badge for highlighted nodes
                if (isHighlighted) {
                    this.ctx.font = '9px Inter, sans-serif';
                    this.ctx.fillStyle = node.color;
                    this.ctx.fillText(node.category, labelX, labelY + 14);
                }
            }
        });

        // Draw connection count indicator for highly connected nodes
        this.nodes.filter(n => n.connections > 4).forEach(node => {
            this.ctx.font = 'bold 8px Inter, sans-serif';
            this.ctx.fillStyle = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(node.connections, node.x, node.y + 3);
            this.ctx.textAlign = 'left';
        });
    }

    animate() {
        this.update();
        this.draw();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// ==========================================================================
// Scroll Animations
// ==========================================================================
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallax();
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// ==========================================================================
// Form Handler
// ==========================================================================
class FormHandler {
    constructor() {
        this.forms = document.querySelectorAll('form[data-form]');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e, form));
        });
    }

    async handleSubmit(e, form) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // TODO: Replace with actual form submission endpoint
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
            await new Promise(resolve => setTimeout(resolve, 1500));

            submitBtn.textContent = 'Sent!';
            form.reset();

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);

        } catch (error) {
            submitBtn.textContent = 'Error. Try again.';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    }
}

// ==========================================================================
// Counter Animation
// ==========================================================================
class CounterAnimation {
    constructor() {
        this.init();
    }

    init() {
        const counters = document.querySelectorAll('[data-counter]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        };

        update();
    }
}

// ==========================================================================
// Initialize Everything
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    window.themeManager = new ThemeManager();
    window.navManager = new NavigationManager();
    window.scrollAnimations = new ScrollAnimations();
    window.formHandler = new FormHandler();
    window.counterAnimation = new CounterAnimation();

    // Initialize i18n
    if (window.i18n) {
        window.i18n.init();
    }

    // Initialize advanced graphs
    const heroGraph = document.getElementById('heroGraph');
    if (heroGraph) {
        window.heroKnowledgeGraph = new KnowledgeGraphAdvanced('heroGraph', {
            nodeCount: 60,
            maxConnections: 4,
            connectionDistance: 180,
            showParticles: true,
            showLabels: true,
            interactive: true,
            pulseNodes: true
        });
    }

    const featuresGraph = document.getElementById('featuresGraph');
    if (featuresGraph) {
        window.featuresKnowledgeGraph = new KnowledgeGraphAdvanced('featuresGraph', {
            nodeCount: 45,
            maxConnections: 3,
            connectionDistance: 160,
            showParticles: true,
            showLabels: true,
            interactive: true,
            pulseNodes: true
        });
    }

    const contextGraph = document.getElementById('contextGraph');
    if (contextGraph) {
        window.contextKnowledgeGraph = new KnowledgeGraphAdvanced('contextGraph', {
            nodeCount: 55,
            maxConnections: 4,
            connectionDistance: 200,
            showParticles: true,
            showLabels: true,
            interactive: true,
            pulseNodes: true
        });
    }

    // Add animate-on-scroll class to elements
    document.querySelectorAll('section > .section-header, .card, .timeline-item, .feature-item, .skill-card, .context-card').forEach(el => {
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }
    });

    // Pipeline style toggle
    const pipelineBtns = document.querySelectorAll('[data-pstyle]');
    const pipelineVisual = document.querySelector('.pipeline-visual');
    if (pipelineBtns.length && pipelineVisual) {
        pipelineBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                pipelineBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                pipelineVisual.setAttribute('data-pipeline', btn.dataset.pstyle);
            });
        });
    }
});

// ==========================================================================
// Utility Functions
// ==========================================================================
window.centinela = {
    setLang: (lang) => window.i18n?.setLanguage(lang),
    setTheme: (theme) => window.themeManager?.applyTheme(theme),
    toggleTheme: () => window.themeManager?.toggle()
};
