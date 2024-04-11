/*
* Model Resources
* */
export const COLLISION_SCENE_URL = new URL("./assets/models/scene_collision.glb", import.meta.url).href;
export const STATIC_SCENE_URL = new URL("./assets/models/scene_desk_obj.glb", import.meta.url).href;

/*
* Texture Resources
* */
export const BOARD_TEXTURES = [
	new URL("./assets/boards/1.png", import.meta.url).href,
	new URL("./assets/boards/2.png", import.meta.url).href,
	new URL("./assets/boards/3.jpg", import.meta.url).href,
	new URL("./assets/boards/4.jpg", import.meta.url).href,
	new URL("./assets/boards/5.png", import.meta.url).href,
	new URL("./assets/boards/6.png", import.meta.url).href,
	new URL("./assets/boards/7.png", import.meta.url).href,
	new URL("./assets/boards/8.jpg", import.meta.url).href,
	new URL("./assets/boards/9.jpg", import.meta.url).href,
	new URL("./assets/boards/10.png", import.meta.url).href
];

/*
* Audio Resources
* */
export const AUDIO_URL = new URL("./assets/audio/我记得.m4a", import.meta.url).href;

/*
* Intro
* */
export const BOARDS_INFO: Record<string, {title: string, author: string, describe: string}> = {
	1: {
		title: "Little Orange",
		author: "Xiao YA",
		describe: `
		It stands in the center of the picture, staring quietly at the audience<br>
		The kitten's little ears are slightly raised, as if it is listening to something<br>
		The soft orange color charmingly outlines its soft hair and smart eyes<br>
		And its body is slightly leaning forward.
		`
	},
	2: {
		title: "Slight light",
		author: "Xiao YA",
		describe: `
		Tiny stars and the Milky Way form a mysterious cosmic world <br>
		Which makes people feel infinite reverie and imagination <br>
		When you gaze at this painting, you will feel the boundless depth and tranquility <br>
		You feel like you are in a night sky with no noise or disturbance <br> 
		In this peaceful space, you can see the shimmering light of the Milky Way.
		`
	},
	3: {
		title: "Swan",
		author: "Xiao YA",
		describe: `
		The surface of the lake is as quiet as a mirror, <br> 
		As if it has laid a layer of crystal clear gauze for the elegant white swans <br>
		One swan with white feathers like snow dances gracefully in the water<br>
		Like a gorgeous dancer dancing on the water.

		`
	},
	4: {
		title: "Hut",
		author: "Xiao YA",
		describe: `
		It is quiet and tranquil, with distant mountains looming in the clouds and mist <br>
		like a dreamlikepicture. The hut stands quietly at the foot of the mountain <br>
		The walls are white and the roof is glowing with light <br>
		making the hut and the surrounding environment reflect each other <br>
		Exuding a natural and harmonious beauty.
		`
	},
	5: {
		title: "Astronaut",
		author: "Xiao YA",
		describe: `
		Astronauts roam the star-studded universe in black night<br>
		Although we are already in the space age, <br>
		Humans have long been able to take a spaceship to the moon.<br>
		But you can never explore the inner universe of others.
		`
	},
	6: {
		title: "Pink Ocean",
		author: "Xiao YA",
		describe: `
		Pink clouds are as fluffy as marshmallows unfolding before your eyes, <br>
		and the crescent moon smiles in the gaps. The moonlight is soft, elegant and moving.<br>
		The purple sky is like a dream, the stars are twinkling, listen silently, <br>
		the gentle breeze blows on your face, quietly, life is flowing.
		`
	},
	7: {
		title: "Calm",
		author: "Xiao YA",
		describe: `
		Take a boat, the sea is calm, The colorful clouds slowly fade away<br>
		Take a boat, the sea is calm, The night calls you softly。<br>
		Take a boat, the sea is calm, The big fish laughs at me silly<br>
		`
	},
	8: {
		title: "Sunflower",
		author: "Xiao YA",
		describe: `
		The sun shines on the golden flower disk. <br>
		Like a bright light, guiding the way forward. <br>
		Sunflower, you are faith, you are strength, you are brilliance, <br>
		you are perseverance, you are loyalty, you are love, you are beauty.
		`
	},
	9: {
		title: "Flower·Tiger·Butterfly",
		author: "Xiao YA",
		describe: `
		A wonderful encounter, a combination of freedom and courage, <br>
		a mysterious and moving charm. <br>
		In this sea of colorful flowers, a tiger with butterfly wings rides a scooter,<br>
		It was like a bolt of lightning that cut through this beautiful world. <br>
		The wings vibrate gently, as if they can fly away from <br>
		this beautiful world at any time and fly to a wider sky.
		`
	},
	10: {
		title: "Whale",
		author: "Xiao YA",
		describe: `
		All the twists and turns are hidden in the dense flock of birds, <br>
		invisible to the sky and ocean, but can be seen with sweet dreams. <br>
		In a moment of groping and confusion, all the memories are hidden in similar days, <br>
		and the spider in my heart imitates the human beings to put on lanterns and decorations.
		`
	}
};

/*
* Computer Iframe SRC
* */
export const IFRAME_SRC = new URL("/universe/index.html", import.meta.url).href;

/*
* Events
* */
export const ON_LOAD_PROGRESS = "on-load-progress";
export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";
export const ON_CLICK_RAY_CAST = "on-click-ray-cast";
export const ON_SHOW_TOOLTIP = "on-show-tooltip";
export const ON_HIDE_TOOLTIP = "on-hide-tooltip";
export const ON_KEY_DOWN = "on-key-down";
export const ON_KEY_UP = "on-key-up";
export const ON_ENTER_APP = "on-enter-app";
