const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

var missionDesc =
    "In a world where an excessive amount of information that are easy to access keeps increasing, learning something isn't hard, the hard part is to know where to start. As someone who often need gentle guidance rather than endless searching, I want to create a website that allows the user to select how are they feeling today, and what do they want to do today, then based on their selection, the website will suggest a resource that fits their current state the best. The resources are carefully curated to ensure quality over quantity, and the suggestion algorithm is designed to prioritize relevance and personalization.";

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.querySelector(".thumbnail-container").style.display = "block";
    document.querySelector(".link").style.display = "inline-block";
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
    document.querySelector(".title").textContent = "Mission";
    document.querySelector(".modal-content").innerText = missionDesc;
    modal.classList.remove("hidden");
    // document.querySelector(".thumbnail-container").style.backgroundColor ="#eca513";
    // document.querySelector(".link").style.display = "none";
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
    },
    {
        id: "13th",
        title: "13th",
        emotions: ["challenging"],
        format: "video",
        thumbnail_url: "",
    },
    {
        id: "acd",
        title: "A Class Divided",
        emotions: ["reflective", "empathetic"],
        format: "video",
        thumbnail_url: "",
    },
    {
        id: "obl",
        title: "Obama’s Legacy (Joy DeGruy)",
        emotions: ["reflective", "empathetic"],
        format: "interview",
        thumbnail_url: "",
    },
    {
        id: "ctc",
        title: "Cracking the Code: A Trip to the Grocery Store",
        emotions: ["challenging"],
        format: "video",
        thumbnail_url: "",
    },
    {
        id: "agape",
        title: "King’s Message of Love and Agape",
        emotions: ["uplifting", "empathetic"],
        format: "talk",
        thumbnail_url: "",
    },
    {
        id: "sm",
        title: "Social Mindfulness",
        emotions: ["reflective", "calming"],
        format: "article",
        thumbnail_url: "",
    },
    {
        id: "med",
        title: "Meditating Lessons",
        emotions: ["calming"],
        format: "exercise",
        thumbnail_url: "",
    },
    {
        id: "conv",
        title: "10 Ways to Have a Better Conversation",
        emotions: ["practical", "uplifting"],
        format: "talk",
        thumbnail_url: "",
    },
    {
        id: "coach",
        title: "Build Your Inner Coach",
        emotions: ["motivational", "calming"],
        format: "talk",
        thumbnail_url: "",
    },
    {
        id: "one",
        title: "One Thing to Change Your Life",
        emotions: ["motivational"],
        format: "talk",
        thumbnail_url: "",
    },
    {
        id: "rbk",
        title: "How to Raise Brilliant Kids",
        emotions: ["uplifting", "empathetic"],
        format: "article",
        thumbnail_url: "",
    },
    {
        id: "goodlife",
        title: "What Makes a Good Life",
        emotions: ["reflective", "uplifting"],
        format: "talk",
        thumbnail_url: "",
    },
    {
        id: "love",
        title: "An Experiment in Love",
        emotions: ["reflective", "empathetic"],
        format: "article",
        thumbnail_url: "",
    },
    {
        id: "brain",
        title: "Your Brain Is Lying To You!",
        emotions: ["mind-opening", "reflective"],
        format: "talk",
        thumbnail_url: "",
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
            option.classList.add("active"); // should not use toggle to prevent deselect
            console.log("Option selected:", option.dataset.value);
            // updateSelection();
        });
    });
}

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

function updateRecommendation() {
    const feeling = getSelectedFeeling();
    const intention = getSelectedIntention();

    console.log("Selected Feeling:", feeling);
    console.log("Selected Ieeling:", intention);
    if (!feeling || !intention) return;

    const pool = buildWeightedPool(feeling, intention);
    const resource = pickRandomResource(pool);

    if (!resource) return;
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
