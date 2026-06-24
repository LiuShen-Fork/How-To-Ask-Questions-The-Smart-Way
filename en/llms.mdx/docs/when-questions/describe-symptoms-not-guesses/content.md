# Describe the symptoms of the problem rather than your guesses (/en/docs/when-questions/describe-symptoms-not-guesses)



Telling hackers how you think the problem is caused doesn't help. (If your extrapolations are so valid, why ask for help?) ), so be sure you're telling them the symptoms of the problem as they are, not your explanations and theories; let the hackers speculate and diagnose. If you think it's important to state your guesses, clearly state that they're just your guesses and describe why they don't work.

## Give Evidence Before Speculation [#give-evidence-before-speculation]

Facts should come first: what happened, when it happened, how it was reproduced, what the misinformation was, and what patterns you observed. Speculation can be written, but label it as just speculation and don't package it as a conclusion.

## Counter-example: jumping to premature conclusions [#counter-example-jumping-to-premature-conclusions]

**Stupid question:**

> I'm getting SIG11 errors one after another while compiling the kernel.
> I suspect that one of the flying wires is hitching a ride on the motherboard's alignment, what's the best way to check this situation?

This question directs attention to an unproven hardware speculation that instead hides the real diagnostic value of the phenomenon.

## Good example: describing observable phenomena [#good-example-describing-observable-phenomena]

**Smart question:**

> My assembled computer is a FIC-PA2007 motherboard with an AMD K6/233 CPU (VIA Apollo VP2 chipset).
> 256MB of Corsair PC133 SDRAM memory, when compiling the kernel, it generates SIG11 errors frequently from 20 minutes after bootup.
> But never had the same problem for the first 20 minutes. Rebooting didn't help, but shutting down overnight made it work again for 20 minutes.
> All memory has been replaced, no effect. The relevant part of the standard compilation record is as follows...

The value here is that it provides the hardware environment, time patterns, exclusions made, and associated logs. The responder can continue the diagnosis based on facts, rather than being forced to tear down the questioner's guesses first.

## "Let me see." [#let-me-see]

Since the above seems to be difficult for many to work with, here's a reminder: `All diagnosticians come from Missouri.' The official motto of the U.S. Department of State, on the other hand, is: `Let me see it' (from Congressman Willard D. Vandiver in 1899: \`I come from a country of corn, cotton, burdock, and Democrats, and eloquence neither convinces nor satisfies me. I come from Missouri, and you must show me. ') Against the diagnostician, this is not a suspicion, but simply a real and useful need to be shown something that is as consistent as possible with the original evidence that you have seen, rather than your conjectures and inductive conclusions. So, show it generously!
