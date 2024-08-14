export function initPageTransitions() {

    barba.hooks.after(()=>{
        scroll.init();
        scroll.stop();
    }
    );

    barba.hooks.enter(()=>{
        scroll.destroy();
    }
    );

    barba.hooks.afterEnter(()=>{
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
    }
    );
    
    barba.init({
        sync: true,
        debug: false,
        timeout: 7000,
        transitions: [{
            name: 'portfolio-single',
            from: {
                namespace: ['portfolio-single', 'contributions-single']
            },
            to: {
                namespace: ['portfolio-single', 'contributions-single']
            },
            async leave(data) {
                pageTransitionInPortfolioSingle(data.current);
                initResetDataBefore();
                initResetDataAfter();
                await delay(205);
                data.current.container.remove();
            },
            async enter(data) {
                pageTransitionOutPortfolioSingle(data.next);
            },
            async beforeEnter(data) {
                ScrollTrigger.getAll().forEach(t=>t.kill());
                scroll.destroy();
                initSmoothScroll(data.next.container);
                initScript();
            },
        }, {
            name: 'to-lightgray',
            from: {},
            to: {
                namespace: ['portfolio-single', 'textpage']
            },
            async leave(data) {
                $('[data-theme-page]').attr('data-theme-page', 'light');
                pageTransitionIn(data.current);
                initResetDataBefore();
                await delay(transitionOffset);
                initResetDataAfter();
                data.current.container.remove();
            },
            async enter(data) {
                pageTransitionOut(data.next);
            },
            async beforeEnter(data) {
                ScrollTrigger.getAll().forEach(t=>t.kill());
                scroll.destroy();
                initSmoothScroll(data.next.container);
                initScript();
            },
        }, {
            name: 'to-light',
            from: {},
            to: {
                namespace: ['writing', 'community']
            },
            async leave(data) {
                $('[data-theme-page]').attr('data-theme-page', 'light');
                pageTransitionIn(data.current);
                initResetDataBefore();
                await delay(transitionOffset);
                initResetDataAfter();
                data.current.container.remove();
            },
            async enter(data) {
                pageTransitionOut(data.next);
            },
            async beforeEnter(data) {
                ScrollTrigger.getAll().forEach(t=>t.kill());
                scroll.destroy();
                initSmoothScroll(data.next.container);
                initScript();
            },
        }, {
            name: 'self',
            async leave(data) {
                pageTransitionIn(data.current);
                initResetDataBefore();
                await delay(transitionOffset);
                initResetDataAfter();
                data.current.container.remove();
            },
            async enter(data) {
                pageTransitionOut(data.next);
            },
            async beforeEnter(data) {
                ScrollTrigger.getAll().forEach(t=>t.kill());
                scroll.destroy();
                initSmoothScroll(data.next.container);
                initScript();
            },
        }, {
            name: 'default',
            once(data) {
                initSmoothScroll(data.next.container);
                initScript();
                initLoader();
            },
            async leave(data) {
                $('[data-theme-page]').attr('data-theme-page', 'dark');
                pageTransitionIn(data.current);
                initResetDataBefore();
                await delay(transitionOffset);
                initResetDataAfter();
                data.current.container.remove();
            },
            async enter(data) {
                pageTransitionOut(data.next);
            },
            async beforeEnter(data) {
                ScrollTrigger.getAll().forEach(t=>t.kill());
                scroll.destroy();
                initSmoothScroll(data.next.container);
                initScript();
            },
        }]
    });

    function initSmoothScroll(container) {

        // https://github.com/quentinhocde/loconative-scroll
        scroll = new LoconativeScroll({
            el: container.querySelector('[data-scroll-container]'),
            scrollToEasing: (t)=>(t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),
            smooth: true,
            duration: 0.75
        });

        ScrollTrigger.refresh();
    }
}