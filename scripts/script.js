const allSmallContainer = document.querySelectorAll(".sub-container");
const allDataResult = document.querySelectorAll(".result");

// Sources:

const feelingOptions = document.querySelectorAll(".feeling-option");
const activityOptions = document.querySelectorAll(".activity-option");

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

            // updateSelection();
        });
    });
}

function updateSelection() {
}

function getSelectedOption() {
    
}