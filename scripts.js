const restartButton = document.getElementById("restartView");
restartButton.addEventListener("click", () => {
    resetView(); // 초기화
    location.reload(); // 페이지 리프레시
});


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 500);
const renderer = new THREE.WebGLRenderer({ antialias: true });



const cursor = document.querySelector('.cursor');
const cursorOutline = document.querySelector('.cursor-outline');


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 조명 설정
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

// 텍스처 로딩
const textureLoader = new THREE.TextureLoader();
const globeGeometry = new THREE.SphereGeometry(5, 32, 32);
let globe;

textureLoader.load(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/4096px-Blue_Marble_2002.png',
    function(texture) {
        const globeMaterial = new THREE.MeshPhongMaterial({ map: texture });
        globe = new THREE.Mesh(globeGeometry, globeMaterial);
        scene.add(globe);

        const latitude1 = 37;
        const longitude1 = 233;
        addRedCircleOnGlobe(latitude1, longitude1, "dot1");

        const latitude2 = 36;
        const longitude2 = 221;
        addRedCircleOnGlobe(latitude2, longitude2, "dot2");

        const latitude3 = 39;
        const longitude3 = 244;
        addRedCircleOnGlobe(latitude3, longitude3, "dot3");

        const latitude4 = 22;
        const longitude4 = 246;
        addRedCircleOnGlobe(latitude4, longitude4, "dot4"); 

        const latitude41 = 25;
        const longitude41 = 239;
        addRedCircleOnGlobe(latitude41, longitude41, "dot41"); 

        const latitude5 = -6;
        const longitude5 = 253;
        addRedCircleOnGlobe(latitude5, longitude5, "dot5"); //인도네시아

        const latitude6 = 15;
        const longitude6 = 239;
        addRedCircleOnGlobe(latitude6, longitude6, "dot6"); //필리핀

        const latitude7 = 50;
        const longitude7 = 297;
        addRedCircleOnGlobe(latitude7, longitude7, "dot7"); //카작

        const latitude8 = 25;
        const longitude8 = 283;
        addRedCircleOnGlobe(latitude8, longitude8, "dot8"); //인도

        const latitude81 = 5;
        const longitude81 = 244;
        addRedCircleOnGlobe(latitude81, longitude81, "dot81"); //브루나이



        const latitude82 = 14;
        const longitude82 = 260;
        addRedCircleOnGlobe(latitude82, longitude82, "dot82"); //태국

        const latitude83 = 35;
        const longitude83 = 308;
        addRedCircleOnGlobe(latitude83, longitude83, "dot83"); //이란

        const latitude84 = 24;
        const longitude84 = 313;
        addRedCircleOnGlobe(latitude84, longitude84, "dot84"); //사우디

        const latitude85 =48;
        const longitude85 = 263;
        addRedCircleOnGlobe(latitude85, longitude85, "dot85"); //몽골





        const latitude9 = 39;
        const longitude9 = 327;
        addRedCircleOnGlobe(latitude9, longitude9, "dot9"); // 터키

        const latitude10 = 57;
        const longitude10 = 336;
        addRedCircleOnGlobe(latitude10, longitude10, "dot10"); //라트비아
        
        const latitude11 = 39;
        const longitude11 = 344;
        addRedCircleOnGlobe(latitude11, longitude11, "dot11"); // Italy

        const latitude12 = 40;
        const longitude12 = 364;
        addRedCircleOnGlobe(latitude12, longitude12, "dot12"); // spain

        const latitude13 = 51;
        const longitude13 = 360;
        addRedCircleOnGlobe(latitude13, longitude13, "dot13"); // uk





        const latitude14 = 29;
        const longitude14 = 330;
        addRedCircleOnGlobe(latitude14, longitude14, "dot14"); // 이집트

        const latitude15 = 18;
        const longitude15 = 328;
        addRedCircleOnGlobe(latitude15, longitude15, "dot15"); // 수단

        const latitude16 = 7;
        const longitude16 = 323;
        addRedCircleOnGlobe(latitude16, longitude16, "dot16"); // 이디오피아
        
        const latitude17 = 10;
        const longitude17 = 353;
        addRedCircleOnGlobe(latitude17, longitude17, "dot17"); // 나이지리아

        const latitude18 = -34;
        const longitude18 = 341;
        addRedCircleOnGlobe(latitude18, longitude18, "dot18"); //남아공
        
        const latitude181 = 10;
        const longitude181 = 367;
        addRedCircleOnGlobe(latitude181, longitude181, "dot181"); // 말리

        const latitude182 = -2;
        const longitude182 = 340;
        addRedCircleOnGlobe(latitude182, longitude182, "dot182"); // 콩고


        const latitude19 = -35;
        const longitude19 = 211;
        addRedCircleOnGlobe(latitude19, longitude19, "dot19"); //호주

        const latitude20 = -42;
        const longitude20 = 186;
        addRedCircleOnGlobe(latitude20, longitude20, "dot20"); //뉴질랜드

        const latitude21 = -18;
        const longitude21 = 182;
        addRedCircleOnGlobe(latitude21, longitude21, "dot21"); //피지

        const latitude22 = -14;
        const longitude22 = 172;
        addRedCircleOnGlobe(latitude22, longitude22, "dot22"); //사모아




        const latitude23 = 40;
        const longitude23 = 74;
        addRedCircleOnGlobe(latitude23, longitude23, "dot23"); // 뉴욕

        const latitude231 = 34;
        const longitude231 = 87;
        addRedCircleOnGlobe(latitude231, longitude231, "dot231"); // 테네시

        const latitude232 = 34;
        const longitude232 = 119;
        addRedCircleOnGlobe(latitude232, longitude232, "dot232"); // la

        const latitude24 = 45;
        const longitude24 = 75;
        addRedCircleOnGlobe(latitude24, longitude24, "dot24"); // 캐나다

        const latitude25 = 19;
        const longitude25 = 98;
        addRedCircleOnGlobe(latitude25, longitude25, "dot25"); //멕시코

        const latitude26 = 21;
        const longitude26 = 78;
        addRedCircleOnGlobe(latitude26, longitude26, "dot26"); // 쿠바

        const latitude27 = 18;
        const longitude27 = 78;
        addRedCircleOnGlobe(latitude27, longitude27, "dot27"); // 자메이카

        const latitude28 = 5;
        const longitude28 = 75;
        addRedCircleOnGlobe(latitude28, longitude28, "dot28"); // 콜롬비아

        const latitude29 = -23;
        const longitude29 = 43;
        addRedCircleOnGlobe(latitude29, longitude29, "dot29"); // 브라질

        const latitude30 = -36;
        const longitude30 = 57;
        addRedCircleOnGlobe(latitude30, longitude30, "dot30"); // United States

    }
);
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    const cursorOutline = document.getElementById("cursor-outline");
    
    cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    cursorOutline.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
        cursorOutline.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
});


camera.position.z = 15;

// 빨간 원을 지구본 표면에 고정시키는 함수
function addRedCircleOnGlobe(latitude, longitude, name) {
    const radius = 5;
    const lat = THREE.Math.degToRad(latitude);
    const lon = THREE.Math.degToRad(longitude);

    const x = radius * Math.cos(lat) * Math.cos(lon);
    const y = radius * Math.sin(lat);
    const z = radius * Math.cos(lat) * Math.sin(lon);

    const circleGeometry = new THREE.CircleGeometry(0.05, 300);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);

    circle.position.set(x, y, z);
    circle.lookAt(0, 0, 0);

    globe.add(circle); // globe의 자식으로 추가
    circle.userData = { isClickable: true, name: name }; // 클릭 가능 데이터 설정
}


function highlightDot(dotName) {
    globe.children.forEach(child => {
        if (child.userData && child.userData.isClickable) {
            if (child.userData.name === dotName) {
                child.material.color.set(0x39ff14); // 클릭된 점은 네온 그린
            } else {
                child.material.color.set(0xff0000); // 나머지는 기본 빨간색
            }
            child.material.needsUpdate = true; // 변경 반영
        }
    });
}

// Reset 버튼 이벤트 추가
document.getElementById("restartView").addEventListener("click", function () {
    location.reload(); // 페이지 리프레시
});

function onLabelClick(dotId) {
    updateDescription(dotId); // 클릭된 점에 맞는 설명 표시
}
function updateDescription(dotId) {
    const description = descriptions[dotId]; // 클릭된 점의 설명 데이터 가져오기
    if (description) {
        document.getElementById('descriptionTitle').innerText = description.title;
        document.getElementById('descriptionBody').innerText = description.body;

        // 설명 영역 보이기
        const descriptionContainer = document.getElementById('description');
        descriptionContainer.style.display = 'block';
    }
}


// 마우스 이벤트 설정
renderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false);
renderer.domElement.addEventListener('click', onDocumentMouseClick, false);
const footerModal = document.getElementById('footerModal');
let isMouseNearFooter = false;

// 마우스 이동 이벤트
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const offsetX = 15; // 커서와 모달 간 X축 거리
    const offsetY = -45; // 커서와 모달 간 Y축 거리
});

function onDocumentMouseMove(event) {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
}
function onDocumentMouseClick(event) {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // 클릭된 객체 확인 (애니메이션 상태와 관계없이)
    const intersects = raycaster.intersectObjects(globe.children, true);

    if (intersects.length > 0) {
        const clickedObject = intersects.find(intersect => intersect.object.userData.isClickable);

        if (clickedObject) {
            const dotName = clickedObject.object.userData.name;
            
            // 글로브가 멈춘 상태에서도 dot 색상 변경 가능하도록 수정
            globe.children.forEach(child => {
                if (child.userData && child.userData.isClickable) {
                    if (child.userData.name === dotName) {
                        child.material.color.set(0x39ff14); // 클릭된 점은 네온 그린
                        updateDescription(dotName); // 설명 업데이트
                        const videoData = {

                            dot1: {
                                'platform': 'youtube',
                                'id': 'Dvh4w3I5d6o',
                                'start': 165
                            },
                        
                            dot2: {
                                'platform': 'youtube',
                                'id': 'qn7_XMbbNH8',
                                'start': 10,
                            },
                        
                            dot3: {
                                'platform': 'vimeo',
                                'id': '1037681544',
                                'start': 55,
                            },
                        
                            dot4: {
                                'platform': 'vimeo',
                                'id': '1037689849',
                                'start': 77,
                            },
                        
                            dot41: {
                                'platform': 'vimeo',
                                'id': '1035831639',
                                'start': 10,//대만
                            },
                        

                            dot5: {
                                'platform': 'vimeo',
                                'id': '1033644886',
                                'start': 18,
                                 
                            },
                        
                            dot6: {//필리핀
                                'platform': 'vimeo',
                                'id': '1037692626',
                                'start': 24,
                            },
                        
                            dot7: {
                                'platform': 'youtube',
                                'id': 'BY4X2JATThk',
                                'start': 160,
                            },
                        
                            dot8: {
                                'platform': 'vimeo',
                                'id': '1033662214',
                                'start': 27,
                            },
                        
                            dot81: {
                                'platform': 'youtube',
                                'id': 'rzDuSyqKVVk',
                                'start': 0,
                            },
                        
                            dot82: {
                                'platform': 'youtube',
                                'id': '0q1UBc32RwE',
                                'start': 63, 
                            },
                        
                            dot83: {
                                'platform': 'youtube',
                                'id': 'Gvpfzv20ZAA',
                                'start': 0,
                            },
                        
                            dot84: {
                                'platform': 'youtube',
                                'id': 'iIX4SQIe-2k',
                                'start': 0,
                            },
                        
                            dot85: {
                                'platform': 'youtube',
                                'id': 'YcZ2V-0ON68',
                                'start': 114,
                            },
                        
                            dot9: {
                                'platform': 'vimeo',
                                'id': '1035820082',
                                'start': 16,   
                            },
                        
                            dot10: {
                                'platform': 'youtube',
                                'id': 'EQlpaVW3s7U',
                                'start': 53,
                            },
                        
                            dot11: {
                                'platform': 'youtube',
                                'id': 'M5qQETERo70',
                                'start': 87,
                            },
                        
                            dot12: {
                                'platform': 'vimeo',
                                'id': '1033644912',
                                'start': 37,
                            },
                        
                            dot13: {
                                'platform': 'vimeo',
                                'id': '278549299',
                                'start': 55,
                            },
                        
                            dot14: {
                                'platform': 'vimeo',
                                'id': '138337404',
                                'start': 82,
                            },
                        
                            dot15: {
                                'platform': 'youtube',
                                'id': 'FbR-zImVcOk',
                                'start': 13,
                            },
                        
                            dot16: {
                                'platform': 'youtube',
                                'id': 'r2GBqKgwk8Y',
                                'start': 67,
                            },
                        
                            dot17: {
                                'platform': 'vimeo',
                                'id': '1037682988',
                                'start': 73,
                            },
                        
                            dot18: {
                                'platform': 'vimeo',
                                'id': '1035822510',
                                'start': 0,
                            },
                        
                            dot181: {
                                'platform': 'youtube',
                                'id': 'D4GV_UStJxk',
                                'start': 22,
                            },
                        
                            dot182: {
                                'platform': 'youtube',
                                'id': 'e55EjID_AAs',
                                'start': 32,
                            },
                        
                            dot19: {
                                'platform': 'vimeo',
                                'id': '1035822549',
                                'start': 23,
                            },
                        
                            dot20: {
                                'platform': 'vimeo',
                                'id': '1037681019',
                                'start': 20,
                            },
                        
                            dot21: {
                                'platform': 'vimeo',
                                'id': '1033671980',
                                'start': 15,
                            },
                        
                            dot22: {
                                'platform': 'youtube',
                                'id': '2wRExeP_aRI',
                                'start': 34,
                            },
                        
                            dot23: {
                                'platform': 'vimeo',
                                'id': '1035830363',
                                'start': 38,
                            },
                        
                            dot231: {
                                'platform': 'vimeo',
                                'id': '1033643230',
                                'start': 40,
                            },
                        
                            dot232: {
                                'platform': 'vimeo',
                                'id': '1035823628',
                                'start': 100,
                            },
                        
                            dot24: {
                                'platform': 'vimeo',
                                'id': '1035822533',
                                'start': 85,
                            },
                        
                            dot25: {
                                'platform': 'youtube',
                                'id': 'HwjkTH5xCTw',
                                'start': 36, 
                            },
                        
                            dot26: {
                                'platform': 'youtube',
                                'id': 'Km-8dQA2bfA',
                                'start': 120,
                            },
                        
                            dot27: {
                                'platform': 'vimeo',
                                'id': '1035819997',
                                'start': 29,   
                            },
                        
                            dot28: {
                                'platform': 'youtube',
                                'id': 'Nmb80HXWsFQ',
                                'start': 36,
                            },
                        
                            dot29: {
                                'platform': 'youtube',
                                'id': 'qX2hZGCMfFI',
                                'start': 11,
                            },
                        
                            dot30: {
                                'platform': 'youtube',
                                'id': 'oHGnxHfQ4IM',
                                'start': 50,
                            }
                        };
                        const video = videoData[dotName];
                        if (video) {
                            if (video.platform === "youtube") {
                                playYouTubeVideo(video.id, video.start);
                            } else if (video.platform === "vimeo") {
                                playVimeoVideo(video.id, video.start);
                            }
                        }
                    } else {
                        child.material.color.set(0xff0000); // 나머지는 빨간색
                    }
                    child.material.needsUpdate = true;
                }
            });
        }
    }
}

// 지구본 버튼과 모달 가져오기
const resetModal = document.getElementById('resetModal');

// 마우스가 지구본 버튼 위에 있을 때 모달 표시 및 따라다니기
restartButton.addEventListener('mouseenter', () => {
    resetModal.style.display = 'block';

    // 마우스 이동에 따라 모달 위치 업데이트
    document.addEventListener('mousemove', moveResetModal);
});

// 마우스가 지구본 버튼을 벗어날 때 모달 숨기기
restartButton.addEventListener('mouseleave', () => {
    resetModal.style.display = 'none';
    document.removeEventListener('mousemove', moveResetModal); // 이벤트 제거
});

// 모달을 커서 위치에 따라 이동시키는 함수
function moveResetModal(event) {
    const offsetX = -80; // 커서 왼쪽으로 120px
    const offsetY = -30;  // 커서 위쪽으로 30px

    resetModal.style.left = `${event.pageX + offsetX}px`;
    resetModal.style.top = `${event.pageY + offsetY}px`;
}

// 활성 라벨과 설명, 비디오 상태를 저장하는 변수
let activeDotName = null;
let activeVideoData = null; // 마지막 재생된 비디오 정보 저장




function playYouTubeVideo(videoId, start) {
    const youtubePlayer = document.getElementById("youtubePlayer");
    const player = document.createElement('iframe');
    player.width = "420";
    player.height = "260";
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&start=${start}`;
    player.frameBorder = "0";
    player.allow = "autoplay; encrypted-media";
    player.allowFullscreen = true;
    youtubePlayer.innerHTML = ''; // 이전 iframe 제거
    youtubePlayer.appendChild(player);
    youtubePlayer.style.display = "block";
}
function playVimeoVideo(videoId, start) {
    const youtubePlayer = document.getElementById("youtubePlayer");
    const player = document.createElement('iframe');
    player.width = "420"; // Vimeo 동영상 가로 크기
    player.height = "260"; // Vimeo 동영상 세로 크기
    player.src = `https://player.vimeo.com/video/${videoId}?autoplay=1#t=${start}s&loop=1&title=0&byline=0&portrait=0`;
    player.frameBorder = "0";
    player.allow = "autoplay; fullscreen; picture-in-picture";

    youtubePlayer.innerHTML = ''; // 기존 iframe 제거
    youtubePlayer.appendChild(player); // Vimeo iframe 추가
    youtubePlayer.style.display = "block"; // 플레이어 표시

    
}

// 상태 관리 변수
let isAnimationRunning = true; // 애니메이션 초기 상태
let animationFrameId = null; // requestAnimationFrame ID 저장

// 플레이/스탑 버튼 생성 및 스타일 설정
const playStopButton = document.createElement('button');
playStopButton.id = 'playStopButton';
playStopButton.textContent = isAnimationRunning ? '⏸' : '▶︎';
document.body.appendChild(playStopButton);

// 애니메이션 시작 함수
function startAnimation() {
    if (!isAnimationRunning) return; // 상태 확인 후 실행 방지

    const animate = () => {
        // 애니메이션 루프 조건
        if (!isAnimationRunning) {
            cancelAnimationFrame(animationFrameId); // 루프 중단
            animationFrameId = null; // ID 초기화
            return;
        }

        if (globe) {
            globe.rotation.y += 0.001; // 지구본 회전
        }

        renderer.render(scene, camera); // Three.js 장면 렌더링
        animationFrameId = requestAnimationFrame(animate); // 다음 프레임 요청
    };

    // 애니메이션 실행
    animationFrameId = requestAnimationFrame(animate);
}

// 애니메이션 중단 함수
function stopAnimation() {
    isAnimationRunning = false; // 실행 상태 업데이트
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // 현재 애니메이션 중단
        animationFrameId = null; // ID 초기화
    }
}

// 버튼 클릭 이벤트
playStopButton.addEventListener('click', () => {
    isAnimationRunning = !isAnimationRunning; // 상태 토글
    playStopButton.textContent = isAnimationRunning ? '⏸' : '▶'; // 버튼 텍스트 변경

    if (isAnimationRunning) {
        startAnimation(); // 애니메이션 시작
    } else {
        stopAnimation(); // 애니메이션 중단
    }
});

// 초기 애니메이션 시작
startAnimation();


// 마우스 컨트롤
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

document.addEventListener('mousedown', function() { isDragging = true; }, false);
document.addEventListener('mousemove', function(event) {
    if (isDragging && globe) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        globe.rotation.y += deltaX * 0.005;
        globe.rotation.x += deltaY * 0.005;
    }
    previousMousePosition = { x: event.clientX, y: event.clientY };
}, false);
document.addEventListener('mouseup', function() { isDragging = false; }, false);

document.addEventListener('wheel', function(event) {
    const zoomSpeed = 0.05;
    const minZoom = 8;
    const maxZoom = 25;

    camera.position.z += event.deltaY * zoomSpeed;
    camera.position.z = Math.max(minZoom, Math.min(camera.position.z, maxZoom));
}, false);
let zoomInterval; // 줌 동작을 반복하기 위한 interval 변수
let isZooming = false; // 줌 상태를 확인하는 플래그

// 카메라 줌 함수
function zoomCamera(direction) {
    const zoomSpeed = 0.1; // 줌 속도
    const minZoom = 8;     // 최소 줌
    const maxZoom = 25;    // 최대 줌

    camera.position.z += direction * zoomSpeed;
    camera.position.z = Math.max(minZoom, Math.min(camera.position.z, maxZoom));
}

// 줌 버튼 이벤트 추가
function startZooming(direction) {
    if (isZooming) return; // 이미 줌 동작 중이면 중복 실행 방지
    isZooming = true;

    zoomInterval = setInterval(() => {
        zoomCamera(direction);
    }, 50); // 50ms 간격으로 줌 동작
}

function stopZooming() {
    clearInterval(zoomInterval); // 줌 동작 중지
    isZooming = false;
}

// + 버튼과 - 버튼에 이벤트 연결
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");

// + 버튼: 줌 인
zoomInButton.addEventListener("mousedown", () => startZooming(-1));
zoomInButton.addEventListener("mouseup", stopZooming);
zoomInButton.addEventListener("mouseleave", stopZooming); // 버튼 밖으로 나갔을 때도 멈춤

// - 버튼: 줌 아웃
zoomOutButton.addEventListener("mousedown", () => startZooming(1));
zoomOutButton.addEventListener("mouseup", stopZooming);
zoomOutButton.addEventListener("mouseleave", stopZooming); // 버튼 밖으로 나갔을 때도 멈춤


document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const cursorOutline = document.querySelector(".cursor-outline");

    // 마우스 이동 시 커서 위치 업데이트
    document.addEventListener("mousemove", (e) => {
        const x = e.pageX;
        const y = e.pageY;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        cursorOutline.style.left = `${x}px`;
        cursorOutline.style.top = `${y}px`;
    });

    // 클릭 이벤트로 애니메이션 트리거
    document.addEventListener("mousedown", (e) => {
        // 줄어든 상태의 위치 조정
        const adjustedX = e.pageX - 4; // 클릭 시 X 좌표를 10픽셀 왼쪽으로 이동
        const adjustedY = e.pageY - 6; // 클릭 시 Y 좌표를 10픽셀 위로 이동

        cursor.style.left = `${adjustedX}px`;
        cursor.style.top = `${adjustedY}px`;
        cursorOutline.style.left = `${adjustedX}px`;
        cursorOutline.style.top = `${adjustedY}px`;

        // 클래스 추가로 애니메이션 실행
        cursor.classList.add("cursor-expand");
        cursorOutline.classList.add("cursor-expand");

        // 애니메이션 종료 후 원래 위치로 복구
        setTimeout(() => {
            cursor.classList.remove("cursor-expand");
            cursorOutline.classList.remove("cursor-expand");

            // 복구 시 원래 마우스 위치로 조정
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
            cursorOutline.style.left = `${e.pageX}px`;
            cursorOutline.style.top = `${e.pageY}px`;
        }, 50); // 애니메이션 시간과 동일
    });
});



// GSAP 애니메이션
function aboutToggle() {
    const aboutSub = document.getElementById('aboutSub');
    const aboutButton = document.getElementById('aboutButton');
    const zoomButtons = document.getElementById('zoomButtons');

    const tl = gsap.timeline();

    if (aboutSub.style.display === 'none' || window.getComputedStyle(aboutSub).display === 'none') {
        // 숨겨진 상태: 나타나게 애니메이션 적용
        aboutSub.style.display = 'block'; // display:block으로 설정
        tl.set(aboutSub, { opacity: 0, bottom: "45px" }); // 초기 상태 설정
        tl.to(aboutSub, { opacity: 1, bottom: "90px", duration: 0.5, ease: "power2.out" });
        tl.to(zoomButtons, { bottom: "360px", duration: 0.5, ease: "power2.out" }, "-=0.5");
    } else {
        // 보이는 상태: 숨기게 애니메이션 적용
        tl.to(aboutSub, { opacity: 0, bottom: "45px", duration: 0.5, ease: "power2.in" });
        tl.to(zoomButtons, { bottom: "90px", duration: 0.5, ease: "power2.in" }, "-=0.5");
        tl.set(aboutSub, { display: 'none' }); // 애니메이션 후 숨김 처리
    }
    if (aboutButton.classList.contains('active')) {
        // 버튼이 active 상태면 초기화
        aboutButton.classList.remove('active');
        aboutButton.textContent = 'About...'; // 텍스트 초기화
        aboutSub.style.display = 'none'; // aboutSub 숨김
    } else {
        // active 상태로 변경
        aboutButton.classList.add('active');
        aboutButton.textContent = 'down'; // 텍스트 변경
        aboutSub.style.display = 'block'; // aboutSub 보이기
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const spotifyButton = document.getElementById('spotifyButton');
    const modal = document.getElementById('spotifyModal');
    const confirmButton = document.getElementById('confirmSpotify');
    const cancelButton = document.getElementById('cancelSpotify');

    // Spotify 버튼 클릭 시 모달 표시
    spotifyButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // "이동하기" 버튼 클릭 시 Spotify 링크로 이동
    confirmButton.addEventListener('click', function () {
        window.location.href = 'https://open.spotify.com/playlist/3cltFdqLMo5Dv8vpEkzS0V?si=5bb88f6d26404b86'; // 이동할 URL
    });

    // "취소" 버튼 클릭 시 모달 닫기
    cancelButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



// 모달 관련 요소 가져오기
const logo = document.getElementById('logo');

document.getElementById('logo').addEventListener('click', () => {
    window.location.reload();
});


// 카메라 초기 위치 저장
const initialCameraPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
const initialCameraLookAt = new THREE.Vector3(0, 0, 0); // 처음 카메라가 바라보는 지점


let resetTimer;

// 초기화 함수
function startInactivityTimer() {
    // 기존 타이머가 있으면 취소
    if (resetTimer) clearTimeout(resetTimer);

    // 15초 후 초기화 설정
    resetTimer = setTimeout(() => {
        console.log("20초 동안 입력이 없어 페이지를 초기화합니다.");
        location.reload(); // 페이지를 새로고침하여 초기화
    }, 15000); // 15초 (20,000ms)
}

// 지구본 상의 점을 렌더링하고 이벤트 연결
document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const regionNameDiv = document.getElementById('regionName');


    // 점들을 생성
    const dotGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    dotsData.forEach(data => {
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        dot.position.set(...data.position);
        dot.userData = { name: data.name }; // 점에 이름 데이터를 추가
        scene.add(dot);
    });

    // 마우스 클릭 이벤트 리스너
    function onMouseClick(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            const intersected = intersects[0].object;
            if (intersected.userData.name) {
                const regionName = intersected.userData.name;
                regionNameDiv.textContent = regionName; // 이름 표시
                regionNameDiv.style.display = "block";

                
            }
        }
    }

    window.addEventListener('click', onMouseClick);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
});
