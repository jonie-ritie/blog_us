(() => {
    var navEl = document.getElementById('theme-nav');
    navEl.addEventListener('click', (e) => {
        if (window.innerWidth <= 800) {
            if (navEl.classList.contains('open')) {
                navEl.style.height = ''
            } else {
                navEl.style.height = 48 + document.querySelector('#theme-nav .nav-items').clientHeight + 'px'
            }
            navEl.classList.toggle('open')
        } else {
            if (navEl.classList.contains('open')) {
                navEl.style.height = ''
                navEl.classList.remove('open')
            }
        }
    })
    window.addEventListener('resize', (e) => {
        if (navEl.classList.contains('open')) {
            navEl.style.height = 48 + document.querySelector('#theme-nav .nav-items').clientHeight + 'px'
        }
        if (window.innerWidth > 800) {
            if (navEl.classList.contains('open')) {
                navEl.style.height = ''
                navEl.classList.remove('open')
            }
        }
    })

    // a simple solution for managing cookies
    const Cookies = new class {
        get(key, fallback) {
            const temp = document.cookie.split('; ').find(row => row.startsWith(key + '='))
            if (temp) {
                return temp.split('=')[1];
            } else {
                return fallback
            }
        }
        set(key, value) {
            document.cookie = key + '=' + value + '; path=' + document.body.getAttribute('data-config-root')
        }
    }

    const ColorScheme = new class {
        constructor() {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { this.updateCurrent(Cookies.get('color-scheme', 'auto')) })
        }
        get() {
            const stored = Cookies.get('color-scheme', 'auto')
            this.updateCurrent(stored)
            return stored
        }
        set(value) {
            bodyEl.setAttribute('data-color-scheme', value)
            Cookies.set('color-scheme', value)
            this.updateCurrent(value)
            return value
        }
        updateCurrent(value) {
            var current = 'light'
            if (value == 'auto') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    current = 'dark'
                }
            } else {
                current = value
            }
            document.body.setAttribute('data-current-color-scheme', current)
        }
    }

    if (document.getElementById('theme-color-scheme-toggle')) {
        var bodyEl = document.body
        var themeColorSchemeToggleEl = document.getElementById('theme-color-scheme-toggle')
        var options = themeColorSchemeToggleEl.getElementsByTagName('input')

        if (ColorScheme.get()) {
            bodyEl.setAttribute('data-color-scheme', ColorScheme.get())
        }

        for (const option of options) {
            if (option.value == bodyEl.getAttribute('data-color-scheme')) {
                option.checked = true
            }
            option.addEventListener('change', (ev) => {
                var value = ev.target.value
                ColorScheme.set(value)
                for (const o of options) {
                    if (o.value != value) {
                        o.checked = false
                    }
                }
            })
        }
    }

    if (document.body.attributes['data-rainbow-banner']) {
        var shown = false
        switch (document.body.attributes['data-rainbow-banner-shown'].value) {
            case 'always':
                shown = true
                break;
            case 'auto':
                shown = new Date().getMonth() + 1 == parseInt(document.body.attributes['data-rainbow-banner-month'].value, 10)
                break;
            default:
                break;
        }
        if (shown) {
            var banner = document.createElement('div')

            banner.style.setProperty('--gradient', `linear-gradient(90deg, ${document.body.attributes['data-rainbow-banner-colors'].value})`)
            banner.classList.add('rainbow-banner')

            navEl.after(banner)
        }
    }

    // add a time cat on the comment page
    $(".option").on("click", function () {
        $(".option").removeClass("active");
        $(this).addClass("active");
        var type = $(this).data("option");
        setTimeout(function () {
            if (type === "day") {
                $(".time").attr('class', 'time day');
            } else if (type === "night") {
                $(".time").attr('class', 'time night');
            } else if (type === "dusk") {
                $(".time").attr('class', 'time dusk');
            } else if (type === "sunset") {
                $(".time").attr('class', 'time sunset');
            }
        }, 500);
    });
    // 根据当地时间 设置不同时间的timeCat
    const hourNow = new Date().getHours() + 1
    if (hourNow > 5 && hourNow <= 8){
        $(".option").removeClass("active");
        $(".option:nth-child(1)").addClass("active");
        $(".time").attr('class', 'time dusk');
    } else if (hourNow > 8 && hourNow <= 16){
        $(".option").removeClass("active");
        $(".option:nth-child(2)").addClass("active");
        $(".time").attr('class', 'time day');
    } else if (hourNow > 16 && hourNow <= 20){
        $(".option").removeClass("active");
        $(".option:nth-child(3)").addClass("active");
        $(".time").attr('class', 'time sunset');
    } else if ((hourNow > 20 && hourNow <= 24) || (hourNow > 0 && hourNow <= 5)){
        $(".option").removeClass("active");
        $(".option:nth-child(4)").addClass("active");
        $(".time").attr('class', 'time night');
    }
})()