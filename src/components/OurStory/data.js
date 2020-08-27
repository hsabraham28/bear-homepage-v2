// Our Story Schema.
// For descriptions see https://docs.google.com/document/d/1rFpBTqvv9HK00-ruVHi7AJa07idroTHa4ZrOW5Br2Vg/edit?usp=sharing

{[
    { // base
        id: none, //whatever works
        name: none, 
        year: none, // string (freshmen, junior, etc)
        major,
        storyType: none, // string (either "academics", "transition", "clubs", "apps") 
    },

    { // academics
        email: none,
        college: none,
        gpareq,
        prereq,
        tips,
    },

    { // transition
        residency,
        feel,
        emo,
        concern,
        challenge,
    },

    { // club
        clubs,
        transition,
        proscons,
        balance,
        type,
    },

    { // app
        factors,
        cope,
        advice,
        pic,
        type,
    }
]}