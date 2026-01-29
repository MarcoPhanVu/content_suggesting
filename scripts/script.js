const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

var missionDesc =
    "In a world where an excessive amount of information that are easy to access keeps increasing, learning something isn't hard, the hard part is to know where to start. As someone who often need gentle guidance rather than endless searching, I want to create a website that allows the user to select how are they feeling today, and what do they want to do today, then based on their selection, the website will suggest a resource that fits their current state the best. The resources are carefully curated to ensure quality over quantity, and the suggestion algorithm is designed to prioritize relevance and personalization.";

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    // document.querySelector(".thumbnail-container").style.display = "block";
    // document.querySelector(".link").style.display = "inline-block";
});

modal.addEventListener("click", (e) => {
    // Click outside to close
    if (e.target === modal) {
        modal.classList.add("hidden");
    }

    document.querySelector(".thumbnail-container").style.display = "block";
    document.querySelector(".link").style.display = "inline-block";
});

function toggleMission() {
    console.log("Mission button clicked");
    document.querySelector(".modal-text-only").innerHTML = missionDesc;

    document.querySelector(".modal-text-only").style.display = "block";
    document.querySelector(".modal-content").style.display = "none";
    modal.classList.remove("hidden");
}

// Sources:
const feelingOptions = document.querySelectorAll(".feeling-option");
const intentionOptions = document.querySelectorAll(".intention-option");

const resources = [
    {
        id: "wlm",
        title: "White Like Me",
        emotions: ["challenging", "reflective"],
        format: "video",
        thumbnail_url: "",
        href_url: "https://youtu.be/1s2yPnYgQOM?si=rSmC9tujtXAi7Hgd",
        embeddable: true,
        embedded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/1s2yPnYgQOM?si=TIaFl1O5lp0X_r6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "13th",
        title: "13th",
        emotions: ["challenging"],
        format: "video",
        thumbnail_url: "",
        href_url: "https://youtu.be/krfcq5pF8u8?si=qj_Z8njS8-SxUEKD",
        embeddable: true,
        embedded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/krfcq5pF8u8?si=yj8ouV9a89PxIE1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "acd",
        title: "A Class Divided",
        emotions: ["reflective", "empathetic"],
        format: "video",
        thumbnail_url: "./thumbnails/acd.png",
        href_url:
            "https://www.pbs.org/wgbh/frontline/documentary/class-divided/?",
    },
    {
        id: "obl",
        title: "Obama’s Legacy (Joy DeGruy)",
        emotions: ["reflective", "empathetic"],
        format: "interview",
        thumbnail_url: "",
        href_url: "https://youtu.be/uqK2_w4k5hA?si=-9ipDDUb2X2D_Zun",
        embbedable: true,
        embbeded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/uqK2_w4k5hA?si=-TdDqwkeQb5krhN-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "ctc",
        title: "Cracking the Code: A Trip to the Grocery Store",
        emotions: ["challenging"],
        format: "video",
        thumbnail_url: "",
        href_url: "https://youtu.be/GTvU7uUgjUI?si=zpzVctz-hwNs08mq",
        embbedable: true,
        embbeded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/GTvU7uUgjUI?si=zpzVctz-hwNs08mq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "kinglove",
        title: "King’s Message of Love",
        emotions: ["uplifting", "empathetic"],
        format: "talk",
        thumbnail_url: "./thumbnails/kinglove.png",
        href_url:
            "https://theconversation.com/why-a-fractured-nation-needs-to-remember-kings-message-of-love-68643",
        embbedable: false,
        embbeded_iframe: "",
    },
    {
        id: "sm",
        title: "Social Mindfulness",
        emotions: ["reflective", "calming"],
        format: "article",
        thumbnail_url: "./thumbnails/sm.png",
        href_url: "https://www.socialmindfulness.nl/",
        embbedable: false,
        embbeded_iframe: "",
    },
    {
        id: "med",
        title: "Headspace Focus Breathing/Meditating Lessons",
        emotions: ["calming"],
        format: "exercise",
        thumbnail_url: "./thumbnails/headspace.png",
        href_url: "https://www.headspace.com/",
        embbedable: false,
        embbeded_iframe: "",
    },
    {
        id: "conv",
        title: "10 Ways to Have a Better Conversation",
        emotions: ["practical", "uplifting"],
        format: "talk",
        thumbnail_url: "",
        href_url: "https://youtu.be/R1vskiVDwl4?si=J1hz7AxA70QG4d6M",
        embbedable: true,
        embbeded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/R1vskiVDwl4?si=Zq1QXaFbcalp31PT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "coach",
        title: "Build Your Inner Coach",
        emotions: ["motivational", "calming"],
        format: "talk",
        thumbnail_url: "",
        href_url: "https://youtu.be/q7a5TIzOmeQ?si=B5B1GnpGxd-lbzY0",
        embbedable: true,
        embbeded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/q7a5TIzOmeQ?si=-EkenCdDXKSjaSs_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "one",
        title: "One Thing to Change Your Life",
        emotions: ["motivational"],
        format: "talk",
        thumbnail_url: "",
        href_url: "https://youtu.be/kVScc1CRxgs?si=ISmhyFXsvYuKQAFv",
        embbedable: true,
        embbeded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/kVScc1CRxgs?si=UyvfIJjYyYHzTCT_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "rbk",
        title: "How to Raise Brilliant Kids",
        emotions: ["uplifting", "empathetic"],
        format: "article",
        thumbnail_url: "./thumbnails/rbk.png",
        href_url:
            "https://www.npr.org/sections/ed/2018/07/23/627265706/raising-brilliant-kids-with-research-to-back-you-up?utm_medium=RSS&utm_campaign=npred",
        embbedable: false,
        embbeded_iframe: "",
    },
    {
        id: "goodlife",
        title: "What Makes a Good Life",
        emotions: ["reflective", "uplifting"],
        format: "talk",
        thumbnail_url: "",
        href_url: "https://youtu.be/8KkKuTCFvzI?si=VkCISpjZRM3XeL5L",
        embbedable: true,
        embbeded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8KkKuTCFvzI?si=VkCISpjZRM3XeL5L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: "kingagape",
        title: "Six Pillars of Nonviolent Resistance and ‘Agape’",
        emotions: ["motivational", "empathetic"],
        format: "article",
        thumbnail_url: "./thumbnails/kingagape.png",
        href_url:
            "https://www.themarginalian.org/2015/07/01/martin-luther-king-jr-an-experiment-in-love/",
        embbedable: false,
        embbeded_iframe: "",
    },
    {
        id: "brain",
        title: "Your Brain Is Lying To You!",
        emotions: ["mind-opening", "reflective"],
        format: "talk",
        thumbnail_url: "",
        href_url: "https://youtu.be/hQaN5w3YwtM?si=Ry00W7nhuAgen3PH",
        embbedable: true,
        embbeded_iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/hQaN5w3YwtM?si=Ry00W7nhuAgen3PH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
];

const feelings = {
    lonely: ["empathetic", "uplifting"],
    overwhelmed: ["calming"],
    curious: ["mind-opening", "reflective"],
    unmotivated: ["motivational"],
    upset: ["empathetic", "calming"],
    thoughtful: ["reflective"],
};

const intentions = {
    learn: ["mind-opening", "reflective"],
    connect: ["empathetic"],
    calm: ["calming"],
    reflect: ["reflective"],
    inspire: ["motivational", "uplifting"],
};

const weights = {
    feeling: 3,
    intention: 2,
    emotionMatch: 1,
};

function scoreResource(resource, feeling, intention) {
    let score = 0;

    feelings[feeling].forEach((e) => {
        if (resource.emotions.includes(e)) score += weights.feeling;
    });

    intentions[intention].forEach((e) => {
        if (resource.emotions.includes(e)) score += weights.intention;
    });

    return score;
}

function singleSelect(options) {
    options.forEach((option) => {
        option.addEventListener("click", () => {
            options.forEach((opt) => opt.classList.remove("active"));
            // console.log("Option clicked:", option.dataset.value);
            option.classList.add("active"); // should not use toggle to prevent deselect
            // updateSelection();
        });
    });
}

singleSelect(feelingOptions);
singleSelect(intentionOptions);

function buildWeightedPool(feeling, intention) {
    const pool = [];

    for (let i = 0; i < resources.length; i++) {
        const resource = resources[i];
        const score = scoreResource(resource, feeling, intention);
        if (score > 0) {
            for (let j = 0; j < score; j++) {
                pool.push(resource);
            }
        }
    }

    return pool;
}

function pickRandomResource(pool) {
    if (pool.length === 0) return null;

    const index = Math.floor(Math.random() * pool.length);
    return pool[index];
}

function pickRandomResourceAll() {
    console.log("Surprise Me button clicked");
    const index = Math.floor(Math.random() * resources.length);
    const resource = resources[index];

    document.querySelector(".modal-content").style.display = "block";
    document.querySelector(".modal-text-only").style.display = "none";
    document.querySelector(".title").textContent = resource.title;
    document.querySelector(".description").textContent =
        `Format: ${resource.format} | Tone: ${resource.emotions.join(", ")}`;

    modal.classList.remove("hidden");
}

function updateRecommendation() {
    const feeling = getSelectedFeeling();
    const intention = getSelectedIntention();

    // console.log("Selected Feeling:", feeling);
    // console.log("Selected Ieeling:", intention);
    if (!feeling || !intention) {
        toggleMission();
        document.querySelector(".modal-text-only").innerHTML =
            "Please select how you are feeling and your intention for today.";

        modal.classList.remove("hidden");
    }

    const pool = buildWeightedPool(feeling, intention);
    const resource = pickRandomResource(pool);

    if (!resource) return;

    document.querySelector(".modal-content").style.display = "block";
    document.querySelector(".modal-text-only").style.display = "none";
    document.querySelector(".title").textContent = resource.title;
    document.querySelector(".description").textContent =
        `Format: ${resource.format} | Tone: ${resource.emotions.join(", ")}`;

    modal.classList.remove("hidden");
}

function getSelectedFeeling() {
    const activeFeeling = document.querySelector(".feeling-option.active");
    return activeFeeling ? activeFeeling.dataset.value : null;
}

function getSelectedIntention() {
    const activeIntention = document.querySelector(".intention-option.active");
    return activeIntention ? activeIntention.dataset.value : null;
}
