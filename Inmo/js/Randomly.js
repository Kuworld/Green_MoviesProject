function displayMainBoxesRandomly() {
            var mainBoxes = $('.main_box');
            var totalBoxes = mainBoxes.length;
            var indexArray = [];

            for (var i = 0; i < totalBoxes; i++) {
                indexArray.push(i);
            }

            indexArray.sort(function () {
                return 0.5 - Math.random();
            });

            animateBoxes(mainBoxes, indexArray, 0);
        }

        function animateBoxes(mainBoxes, indexArray, currentIndex) {
            if (currentIndex >= mainBoxes.length) {
                return;
            }

            var currentBox = mainBoxes[indexArray[currentIndex]];
            var opacity = 0;
            var animationDuration = 50; // 애니메이션 지속 시간 (밀리초)
            var startTime;

            function animate(currentTime) {
                if (!startTime) {
                    startTime = currentTime;
                }

                var elapsedTime = currentTime - startTime;
                var progress = elapsedTime / animationDuration;

                opacity = progress;

                if (progress < 1) {
                    currentBox.style.opacity = opacity;
                    requestAnimationFrame(animate);
                } else {
                    currentBox.style.opacity = 1;
                    animateBoxes(mainBoxes, indexArray, currentIndex + 1);
                }
            }

            requestAnimationFrame(animate);
        }

