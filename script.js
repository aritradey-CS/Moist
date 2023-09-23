function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

var clutter = "";
document
  .querySelector("#page2>h2")
  .textContent.split(" ")
  .forEach(function (dets) {
    clutter += `<span> ${dets} </span>`;
    document.querySelector("#page2>h2").innerHTML = clutter;
  });

gsap.to("#page2>h2>span", {
  ScrollTrigger: {
    trigger: `#page2>h2.span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: 0.3,
  },
  stagger: 0.1,
  color: `white`,
});

function canvas() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    
    ./assetes/page3-background-photos/0001.jpg
    ./assetes/page3-background-photos/0002.jpg
    ./assetes/page3-background-photos/0003.jpg
    ./assetes/page3-background-photos/0004.jpg
    ./assetes/page3-background-photos/0005.jpg
    ./assetes/page3-background-photos/0006.jpg
    ./assetes/page3-background-photos/0007.jpg
    ./assetes/page3-background-photos/0008.jpg
    ./assetes/page3-background-photos/0009.jpg
    ./assetes/page3-background-photos/0010.jpg
    ./assetes/page3-background-photos/0011.jpg
    ./assetes/page3-background-photos/0012.jpg
    ./assetes/page3-background-photos/0013.jpg
    ./assetes/page3-background-photos/0014.jpg
    ./assetes/page3-background-photos/0015.jpg
    ./assetes/page3-background-photos/0016.jpg
    ./assetes/page3-background-photos/0017.jpg
    ./assetes/page3-background-photos/0018.jpg
    ./assetes/page3-background-photos/0019.jpg
    ./assetes/page3-background-photos/0020.jpg
    ./assetes/page3-background-photos/0021.jpg
    ./assetes/page3-background-photos/0022.jpg
    ./assetes/page3-background-photos/0023.jpg
    ./assetes/page3-background-photos/0024.jpg
    ./assetes/page3-background-photos/0025.jpg
    ./assetes/page3-background-photos/0026.jpg
    ./assetes/page3-background-photos/0027.jpg
    ./assetes/page3-background-photos/0028.jpg
    ./assetes/page3-background-photos/0029.jpg
    ./assetes/page3-background-photos/0030.jpg
    ./assetes/page3-background-photos/0031.jpg
    ./assetes/page3-background-photos/0032.jpg
    ./assetes/page3-background-photos/0033.jpg
    ./assetes/page3-background-photos/0034.jpg
    ./assetes/page3-background-photos/0035.jpg
    ./assetes/page3-background-photos/0036.jpg
    ./assetes/page3-background-photos/0037.jpg
    ./assetes/page3-background-photos/0038.jpg
    ./assetes/page3-background-photos/0039.jpg
    ./assetes/page3-background-photos/0040.jpg
    ./assetes/page3-background-photos/0041.jpg
    ./assetes/page3-background-photos/0042.jpg
    ./assetes/page3-background-photos/0043.jpg
    ./assetes/page3-background-photos/0044.jpg
    ./assetes/page3-background-photos/0045.jpg
    ./assetes/page3-background-photos/0046.jpg
    ./assetes/page3-background-photos/0047.jpg
    ./assetes/page3-background-photos/0048.jpg
    ./assetes/page3-background-photos/0049.jpg
    ./assetes/page3-background-photos/0050.jpg
    ./assetes/page3-background-photos/0051.jpg
    ./assetes/page3-background-photos/0052.jpg
    ./assetes/page3-background-photos/0053.jpg
    ./assetes/page3-background-photos/0054.jpg
    ./assetes/page3-background-photos/0055.jpg
    ./assetes/page3-background-photos/0056.jpg
    ./assetes/page3-background-photos/0057.jpg
    ./assetes/page3-background-photos/0058.jpg
    ./assetes/page3-background-photos/0059.jpg
    ./assetes/page3-background-photos/0060.jpg
    ./assetes/page3-background-photos/0061.jpg
    ./assetes/page3-background-photos/0062.jpg
    ./assetes/page3-background-photos/0063.jpg
    ./assetes/page3-background-photos/0064.jpg
    ./assetes/page3-background-photos/0065.jpg
    ./assetes/page3-background-photos/0066.jpg
    ./assetes/page3-background-photos/0067.jpg
    ./assetes/page3-background-photos/0068.jpg
    ./assetes/page3-background-photos/0069.jpg
    ./assetes/page3-background-photos/0070.jpg
    ./assetes/page3-background-photos/0071.jpg
    ./assetes/page3-background-photos/0072.jpg
    ./assetes/page3-background-photos/0073.jpg
    ./assetes/page3-background-photos/0074.jpg
    ./assetes/page3-background-photos/0075.jpg
    ./assetes/page3-background-photos/0076.jpg
    ./assetes/page3-background-photos/0077.jpg
    ./assetes/page3-background-photos/0078.jpg
    ./assetes/page3-background-photos/0079.jpg
    ./assetes/page3-background-photos/0080.jpg
    ./assetes/page3-background-photos/0081.jpg
    ./assetes/page3-background-photos/0082.jpg
    ./assetes/page3-background-photos/0083.jpg
    ./assetes/page3-background-photos/0084.jpg
    ./assetes/page3-background-photos/0085.jpg
    ./assetes/page3-background-photos/0086.jpg
    ./assetes/page3-background-photos/0087.jpg
    ./assetes/page3-background-photos/0088.jpg
    ./assetes/page3-background-photos/0089.jpg
    ./assetes/page3-background-photos/0090.jpg
    ./assetes/page3-background-photos/0091.jpg
    ./assetes/page3-background-photos/0092.jpg
    ./assetes/page3-background-photos/0093.jpg
    ./assetes/page3-background-photos/0094.jpg
    ./assetes/page3-background-photos/0095.jpg
    ./assetes/page3-background-photos/0096.jpg
    ./assetes/page3-background-photos/0097.jpg
    ./assetes/page3-background-photos/0098.jpg
    ./assetes/page3-background-photos/0099.jpg
    ./assetes/page3-background-photos/0100.jpg
    ./assetes/page3-background-photos/0101.jpg
    ./assetes/page3-background-photos/0102.jpg
    ./assetes/page3-background-photos/0103.jpg
    ./assetes/page3-background-photos/0104.jpg
    ./assetes/page3-background-photos/0105.jpg
    ./assetes/page3-background-photos/0106.jpg
    ./assetes/page3-background-photos/0107.jpg
    ./assetes/page3-background-photos/0108.jpg
    ./assetes/page3-background-photos/0109.jpg
    ./assetes/page3-background-photos/0110.jpg
    ./assetes/page3-background-photos/0111.jpg
    ./assetes/page3-background-photos/0112.jpg
    ./assetes/page3-background-photos/0113.jpg
    ./assetes/page3-background-photos/0114.jpg
    ./assetes/page3-background-photos/0115.jpg
    ./assetes/page3-background-photos/0116.jpg
    ./assetes/page3-background-photos/0117.jpg
    ./assetes/page3-background-photos/0118.jpg
    ./assetes/page3-background-photos/0119.jpg
    ./assetes/page3-background-photos/0120.jpg
    ./assetes/page3-background-photos/0121.jpg
    
   `;
    return data.split("\n")[index];
  }

  const frameCount = 121;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  // Function to update the animation frame
  function updateFrame() {
    imageSeq.frame++;
    if (imageSeq.frame >= frameCount) {
      imageSeq.frame = 0; // Reset to the first frame to create a loop
    }
    render();
  }

  // Set an interval to update the frame every 100 milliseconds
  const animationInterval = setInterval(updateFrame, 100);

  images[1].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  // ... (your image scaling logic)
}

// Scroll-triggered pinning
ScrollTrigger.create({
  trigger: "#page3",
  pin: true,
  start: "top top",
  end: "250% top",
  scroller: "#main",
});
canvas();






// ----------------------------------------------------------------------------------------------
                                    // Used for different approch
// ----------------------------------------------------------------------------------------------

//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: `none`,
//     scrollTrigger: {
//       scrub: .5,
//       trigger: `#page3>canvas`,
//       //   set start end according to preference
//       start: `top top`,
//       end: `250% top`,
//       scroller: `#main`,
//     },
//     onUpdate: render,
//   });

//   images[1].onload = render;

//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }

//   function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
//   ScrollTrigger.create({

//     trigger: "#page3" ,
//     pin: true,
//     // markers:true,
//     scroller: `#main`,
//   //   set start end according to preference
//     start: `top top`,
//     end: `250% top`,
//   });
// }
