// Our Story Schema.
// For descriptions see https://docs.google.com/document/d/1rFpBTqvv9HK00-ruVHi7AJa07idroTHa4ZrOW5Br2Vg/edit?usp=sharing

const eachStory = {
    // base: required fields
    id: null, //whatever works
    name: null,
    year: null, // string (freshmen, junior, etc)
    major: null,
    storyType: null, // string (either "academics", "transition", or "student orgs") 

    // academics
    email: null,
    college: null,
    gpareq: null,
    prereq: null,
    tips: null,
    rigor: null,

    // transition
    residency: null,
    feel: null,
    emo: null,
    concern: null,
    challenge: null,

    // club
    type: null, // for both club and app, to distinguish the two. either "club" or "application"
    clubs: null,
    transition: null,
    proscons: null,
    balance: null,
    

    // app
    type: null,
    factors: null,
    cope: null,
    advice: null,
    pic: null,
}

export default eachStory;