/**
* @description Creates an animation controller for the passed HTMLElement.
* @author Brent Williams <brent.williams@ddincmail.org> (https://www.github.com/DDincBrent).
* @class AnimationController
*/

class AnimationController
{
/**
* @constructor
* @param {HTMLElement} element Element of the HTML generally retrieved from querySelector/querySelectorAll.
* @param {Object} animation_properties An object of animation properties. Please follow GSAP format for animation propertie when creating the Object.
* @param {Boolean} paused Boolean controlling wether or not the animation is paused by default. This is set to false by default following GSAP defaults.
* @param {Number} delay Number in seconds to delay the start of the animation.
*/

	constructor(element, animation_rules, p=false, d=0)
	{
		this.GSAP_TIMELINE = gsap.timeline({ paused: p, delay: d , defaults: animation_rules });
		this.GSAP_TIMELINE.to(element);
	}

	Start()
	{
		this.GSAP_TIMELINE.play();
	}

	Reverse()
	{
		this.GSAP_TIMELINE.reverse();
	}

	Stop()
	{
		this.GSAP_TIMELINE.pause();
	}

	Progress(number)
	{
		let progress;
		isNaN(number) ? progress = this.GSAP_TIMELINE.totalProgress() : progress = this.GSAP_TIMELINE.totalProgress(number);
		return progress;
	}
}