import { trigger, style, animate, transition } from '@angular/animations';

export const Animations = {
	enterLeaveTrigger: trigger('enterLeave', [
		transition(':enter', [
			style({
				height: 0,
				opacity: 0
			}),
			animate('0.5s ease-out', style({
				height: '*',
				opacity: 1
			}))
		]),
		transition(':leave', [
			style({
				height: '*',
				opacity: 1
			}),
			animate('0.5s ease-in', style({
				height: 0,
				opacity: 0
			}))
		])
	])
}
