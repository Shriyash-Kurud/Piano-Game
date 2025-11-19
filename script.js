   const w01 = new Audio("keys/w01.wav");
        const w02 = new Audio("keys/w02.wav");
        const w03 = new Audio("keys/w03.wav");
        const w04 = new Audio("keys/w04.wav");
        const w05 = new Audio("keys/w05.wav");
        const w06 = new Audio("keys/w06.wav");
        const w07 = new Audio("keys/w07.wav");
        const w08 = new Audio("keys/w08.wav");
        const w09 = new Audio("keys/w09.wav");
        const w10 = new Audio("keys/w10.wav");
        const w11 = new Audio("keys/w11.wav");
        const w12 = new Audio("keys/w12.wav");
        const w13 = new Audio("keys/w13.wav");
        const w14 = new Audio("keys/w14.wav");
        const w15 = new Audio("keys/w15.wav");
        const w16 = new Audio("keys/w16.wav");
        const w17 = new Audio("keys/w17.wav");
        const w18 = new Audio("keys/w18.mp3");
        const w19 = new Audio("keys/w19.mp3");
        const w20 = new Audio("keys/w20.mp3");
        const w21 = new Audio("keys/w21.mp3");
        const w22 = new Audio("keys/w22.mp3");
        const w23 = new Audio("keys/w23.mp3");
        const w24 = new Audio("keys/w24.mp3");
        const b01 = new Audio("keys/b01.mp3");
        const b02 = new Audio("keys/b02.mp3");
        const b03 = new Audio("keys/b03.mp3");
        const b04 = new Audio("keys/b04.mp3");
        const b05 = new Audio("keys/b05.mp3");
        const b06 = new Audio("keys/b06.mp3");
        const b07 = new Audio("keys/b07.mp3");
        const b08 = new Audio("keys/b08.mp3");
        const b09 = new Audio("keys/b09.mp3");
        const b10 = new Audio("keys/b10.mp3");
        const b11 = new Audio("keys/b11.mp3");
        const b12 = new Audio("keys/b12.mp3");

        const playSound = audio => {
            const clone = audio.cloneNode();
            clone.play();
            setTimeout(() => (clone.volume = 0.8), 100);
            setTimeout(() => (clone.volume = 0.6), 300);
            setTimeout(() => (clone.volume = 0.4), 600);
            setTimeout(() => (clone.volume = 0.2), 800);
            setTimeout(() => (clone.volume = 0), 1000);
        };

        const attachKey = (selector, playFn) => {
            const el = document.querySelector(selector);
            if (!el) return;
            el.addEventListener("click", playFn);
        };

        const w01Key = document.querySelector(".w01-key");
        const playw01 = () => { playSound(w01); w01Key.classList.add("active"); setTimeout(() => w01Key.classList.remove("active"), 200); };
        attachKey(".w01-key", playw01);

        const w02Key = document.querySelector(".w02-key");
        const playw02 = () => { playSound(w02); w02Key.classList.add("active"); setTimeout(() => w02Key.classList.remove("active"), 200); };
        attachKey(".w02-key", playw02);

        const w03Key = document.querySelector(".w03-key");
        const playw03 = () => { playSound(w03); w03Key.classList.add("active"); setTimeout(() => w03Key.classList.remove("active"), 200); };
        attachKey(".w03-key", playw03);

        const w04Key = document.querySelector(".w04-key");
        const playw04 = () => { playSound(w04); w04Key.classList.add("active"); setTimeout(() => w04Key.classList.remove("active"), 200); };
        attachKey(".w04-key", playw04);

        const w05Key = document.querySelector(".w05-key");
        const playw05 = () => { playSound(w05); w05Key.classList.add("active"); setTimeout(() => w05Key.classList.remove("active"), 200); };
        attachKey(".w05-key", playw05);

        const w06Key = document.querySelector(".w06-key");
        const playw06 = () => { playSound(w06); w06Key.classList.add("active"); setTimeout(() => w06Key.classList.remove("active"), 200); };
        attachKey(".w06-key", playw06);

        const w07Key = document.querySelector(".w07-key");
        const playw07 = () => { playSound(w07); w07Key.classList.add("active"); setTimeout(() => w07Key.classList.remove("active"), 200); };
        attachKey(".w07-key", playw07);

        const w08Key = document.querySelector(".w08-key");
        const playw08 = () => { playSound(w08); w08Key.classList.add("active"); setTimeout(() => w08Key.classList.remove("active"), 200); };
        attachKey(".w08-key", playw08);

        const w09Key = document.querySelector(".w09-key");
        const playw09 = () => { playSound(w09); w09Key.classList.add("active"); setTimeout(() => w09Key.classList.remove("active"), 200); };
        attachKey(".w09-key", playw09);

        const w10Key = document.querySelector(".w10-key");
        const playw10 = () => { playSound(w10); w10Key.classList.add("active"); setTimeout(() => w10Key.classList.remove("active"), 200); };
        attachKey(".w10-key", playw10);

        const w11Key = document.querySelector(".w11-key");
        const playw11 = () => { playSound(w11); w11Key.classList.add("active"); setTimeout(() => w11Key.classList.remove("active"), 200); };
        attachKey(".w11-key", playw11);

        const w12Key = document.querySelector(".w12-key");
        const playw12 = () => { playSound(w12); w12Key.classList.add("active"); setTimeout(() => w12Key.classList.remove("active"), 200); };
        attachKey(".w12-key", playw12);

        const w13Key = document.querySelector(".w13-key");
        const playw13 = () => { playSound(w13); w13Key.classList.add("active"); setTimeout(() => w13Key.classList.remove("active"), 200); };
        attachKey(".w13-key", playw13);

        const w14Key = document.querySelector(".w14-key");
        const playw14 = () => { playSound(w14); w14Key.classList.add("active"); setTimeout(() => w14Key.classList.remove("active"), 200); };
        attachKey(".w14-key", playw14);

        const w15Key = document.querySelector(".w15-key");
        const playw15 = () => { playSound(w15); w15Key.classList.add("active"); setTimeout(() => w15Key.classList.remove("active"), 200); };
        attachKey(".w15-key", playw15);

        const w16Key = document.querySelector(".w16-key");
        const playw16 = () => { playSound(w16); w16Key.classList.add("active"); setTimeout(() => w16Key.classList.remove("active"), 200); };
        attachKey(".w16-key", playw16);

        const w17Key = document.querySelector(".w17-key");
        const playw17 = () => { playSound(w17); w17Key.classList.add("active"); setTimeout(() => w17Key.classList.remove("active"), 200); };
        attachKey(".w17-key", playw17);

        const w18Key = document.querySelector(".w18-key");
        const playw18 = () => { playSound(w18); w18Key.classList.add("active"); setTimeout(() => w18Key.classList.remove("active"), 200); };
        attachKey(".w18-key", playw18);

        const w19Key = document.querySelector(".w19-key");
        const playw19 = () => { playSound(w19); w19Key.classList.add("active"); setTimeout(() => w19Key.classList.remove("active"), 200); };
        attachKey(".w19-key", playw19);

        const w20Key = document.querySelector(".w20-key");
        const playw20 = () => { playSound(w20); w20Key.classList.add("active"); setTimeout(() => w20Key.classList.remove("active"), 200); };
        attachKey(".w20-key", playw20);

        const w21Key = document.querySelector(".w21-key");
        const playw21 = () => { playSound(w21); w21Key.classList.add("active"); setTimeout(() => w21Key.classList.remove("active"), 200); };
        attachKey(".w21-key", playw21);

        const w22Key = document.querySelector(".w22-key");
        const playw22 = () => { playSound(w22); w22Key.classList.add("active"); setTimeout(() => w22Key.classList.remove("active"), 200); };
        attachKey(".w22-key", playw22);

        const w23Key = document.querySelector(".w23-key");
        const playw23 = () => { playSound(w23); w23Key.classList.add("active"); setTimeout(() => w23Key.classList.remove("active"), 200); };
        attachKey(".w23-key", playw23);

        const w24Key = document.querySelector(".w24-key");
        const playw24 = () => { playSound(w24); w24Key.classList.add("active"); setTimeout(() => w24Key.classList.remove("active"), 200); };
        attachKey(".w24-key", playw24);

        const b01Key = document.querySelector(".b01-key");
        const playb01 = () => { playSound(b01); b01Key.classList.add("active"); setTimeout(() => b01Key.classList.remove("active"), 200); };
        attachKey(".b01-key", playb01);

        const b02Key = document.querySelector(".b02-key");
        const playb02 = () => { playSound(b02); b02Key.classList.add("active"); setTimeout(() => b02Key.classList.remove("active"), 200); };
        attachKey(".b02-key", playb02);

        const b03Key = document.querySelector(".b03-key");
        const playb03 = () => { playSound(b03); b03Key.classList.add("active"); setTimeout(() => b03Key.classList.remove("active"), 200); };
        attachKey(".b03-key", playb03);

        const b04Key = document.querySelector(".b04-key");
        const playb04 = () => { playSound(b04); b04Key.classList.add("active"); setTimeout(() => b04Key.classList.remove("active"), 200); };
        attachKey(".b04-key", playb04);

        const b05Key = document.querySelector(".b05-key");
        const playb05 = () => { playSound(b05); b05Key.classList.add("active"); setTimeout(() => b05Key.classList.remove("active"), 200); };
        attachKey(".b05-key", playb05);

        const b06Key = document.querySelector(".b06-key");
        const playb06 = () => { playSound(b06); b06Key.classList.add("active"); setTimeout(() => b06Key.classList.remove("active"), 200); };
        attachKey(".b06-key", playb06);

        const b07Key = document.querySelector(".b07-key");
        const playb07 = () => { playSound(b07); b07Key.classList.add("active"); setTimeout(() => b07Key.classList.remove("active"), 200); };
        attachKey(".b07-key", playb07);

        const b08Key = document.querySelector(".b08-key");
        const playb08 = () => { playSound(b08); b08Key.classList.add("active"); setTimeout(() => b08Key.classList.remove("active"), 200); };
        attachKey(".b08-key", playb08);

        const b09Key = document.querySelector(".b09-key");
        const playb09 = () => { playSound(b09); b09Key.classList.add("active"); setTimeout(() => b09Key.classList.remove("active"), 200); };
        attachKey(".b09-key", playb09);

        const b10Key = document.querySelector(".b10-key");
        const playb10 = () => { playSound(b10); b10Key.classList.add("active"); setTimeout(() => b10Key.classList.remove("active"), 200); };
        attachKey(".b10-key", playb10);

        const b11Key = document.querySelector(".b11-key");
        const playb11 = () => { playSound(b11); b11Key.classList.add("active"); setTimeout(() => b11Key.classList.remove("active"), 200); };
        attachKey(".b11-key", playb11);

        const b12Key = document.querySelector(".b12-key");
        const playb12 = () => { playSound(b12); b12Key.classList.add("active"); setTimeout(() => b12Key.classList.remove("active"), 200); };
        attachKey(".b12-key", playb12);


        window.addEventListener("keydown", ({ keyCode }) => {
            if (keyCode === 81) return playw01(); 
            if (keyCode === 87) return playw02(); 
            if (keyCode === 69) return playw03(); 
            if (keyCode === 82) return playw04(); 
            if (keyCode === 84) return playw05(); 
            if (keyCode === 89) return playw06(); 
            if (keyCode === 85) return playw07(); 
            if (keyCode === 73) return playw08(); 
            if (keyCode === 79) return playw09(); 
            if (keyCode === 80) return playw10(); 
            if (keyCode === 65) return playw11(); 
            if (keyCode === 83) return playw12(); 
            if (keyCode === 68) return playw13(); 
            if (keyCode === 70) return playw14(); 
            if (keyCode === 71) return playw15(); 
            if (keyCode === 72) return playw16(); 
            if (keyCode === 74) return playw17(); 
            if (keyCode === 75) return playw18(); 
            if (keyCode === 76) return playw19(); 
            if (keyCode === 186) return playw20(); 
            if (keyCode === 67) return playw21(); 
            if (keyCode === 86) return playw22(); 
            if (keyCode === 66) return playw23(); 
            if (keyCode === 78) return playw24(); 
            if (keyCode === 49) return playb01(); 
            if (keyCode === 50) return playb02(); 
            if (keyCode === 51) return playb03(); 
            if (keyCode === 52) return playb04(); 
            if (keyCode === 53) return playb05(); 
            if (keyCode === 54) return playb06(); 
            if (keyCode === 55) return playb07(); 
            if (keyCode === 56) return playb08(); 
            if (keyCode === 57) return playb09(); 
            if (keyCode === 48) return playb10(); 
            if (keyCode === 189) return playb11(); 
            if (keyCode === 187) return playb12(); 
        });