# Some questions you shouldn't ask. (/en/docs/questions-you-cannot-ask)



Here are a few classic bad questions and what might be going through a hacker's mind when they are not answered. What they all have in common is not that the question was "too easy", but that the questioner failed to demonstrate the necessary preparation, boundaries, and judgment.

Look at the table of contents first, and then look at the reasoning behind each example:

Question: \[Where can I find X program or X resource?] (#q1)

Question: \[How do I do Y with X?] (#q2)

QUESTION: \[How do I set up my shell prompt?] (#q3)

QUESTION: \[Can I use the Bass-o-matic file conversion tool to convert AcmeCorp files to TeX format?] (#q4)

Question: \[My program/setting/SQL statement is not working] (#q5)

QUESTION: \[I'm having trouble with my Windows computer, can you help me?] (#q6)

Question: [My program won't move, I think there's something wrong with System Tools X](#q7)

QUESTION: \[I'm having trouble installing Linux (or X), can you help me?] (#q8)

QUESTION: \[How can I crack a root account/steal OP privileges/read someone else's email?] (#q9)

***

## Do Not Hand Your Search Task to Others [#do-not-hand-your-search-task-to-others]

<a id="q1" />

> Question: Where can I find X program or X resource?

Answer: it's right where I found it, idiot -- the search engine end. Geez! Doesn't anyone else know how to use [Google](https://www.google.com)?

The problem with this type of question is that it doesn't show any search or filtering process. A better way to ask the question would show what keywords you looked up, what candidate results you found, and why they didn't apply.

## Mistaking means for ends [#mistaking-means-for-ends]

<a id="q2" />

> Question: How do I do Y with X?

Answer: If you are trying to solve Y, don't ask the question in a way that may not be appropriate. This kind of question indicates that the person asking the question is not only completely ignorant of X, but also confused about the problem Y is trying to solve, and has been confined by the situation. It's best to ignore such people until they have clarified the problem.

If it's Y that you really want to address, describe Y's goals, constraints, and context directly. Maybe X isn't the right tool at all, and qualifying the means too soon will just force the respondent to help you in the wrong direction.

## Reluctance to read basic documentation [#reluctance-to-read-basic-documentation]

<a id="q3" />

> Question: How do I set my shell prompt?

Answer: if you're smart enough to mention it, you should also be smart enough to [RTFM](#RTFM) and find out for yourself.

These types of questions can usually be answered directly from a manual, FAQ, or starter document. If you've already read the material in question, point to the specific passage you're stuck on, rather than handing the whole thing over to someone else to rehash.

## Unwilling to do minimal experimentation on their own [#unwilling-to-do-minimal-experimentation-on-their-own]

<a id="q4" />

> Question: Can I use the Bass-o-matic file conversion tool to convert AcmeCorp files to TeX format?

Answer: try it and you'll know. If you try it, you'll know the answer and won't have to waste my time.

If the cost of the experiment is low, try it yourself first. Ask questions around "why is this experiment not working as expected" rather than asking someone else to do the confirming for you that you should be doing.

## No description of the specific problem [#no-description-of-the-specific-problem]

<a id="q5" />

> Problem: My "Program/Setup/SQL statement" is not working!

Answer: It's not really a question, I'm not interested in asking you twenty questions to find out what your real problem is -- I've got more interesting things to do. When I see these kinds of questions, I usually have one of three reactions.

* Is there anything else you'd like to add?
* That sucks. I hope you get it fixed.
* What do I care?

"Not working" is not diagnosable information. You need to state what you did, what you expected to happen, what actually happened, what the full error message is, and what you have ruled out as the cause.

## Throwing Platform Problems at Irrelevant People [#throwing-platform-problems-at-irrelevant-people]

<a id="q6" />

> Question: I'm having trouble with my Windows computer, can you help me?

Answer: Yes, throw out the Microsoft crap and get an open source OS like Linux or BSD.

Note: If the program has an official version of Windows or interacts with Windows (e.g. Samba), you **can** ask Windows-related questions, just don't be surprised by replies that the problem is caused by the Windows operating system rather than the program itself, because Windows in general just sucks, and that statement is usually true.

The key is not "can't ask Windows", but rather the right place and the right scope. Questions related to the project itself can be directed to the project community; purely system usage questions should be directed to a more appropriate Windows support channel.

## Allegations of faulty underlying tools without evidence [#allegations-of-faulty-underlying-tools-without-evidence]

<a id="q7" />

> Problem: My program won't move, I think there's something wrong with System Tools X!

Answer: It is entirely possible that you are the first person to notice an obvious flaw in a system call and library file that is used repeatedly by thousands of users, or more likely, that you are completely unfounded. Extraordinary claims require extraordinary evidence, and when you make such claims, you must back them up with clear and detailed documentation of the defects.

The more you point to underlying, generic, heavily used components, the more rigorous evidence you need. Start by assuming that your environment, input, usage, or understanding may be wrong, and then support your judgment with minimal replication and clear logs.

## Issues requiring on-site operation [#issues-requiring-on-site-operation]

<a id="q8" />

> Question: I'm having trouble installing Linux (or X), can you help me?

Answer: no, I can only find the fault if I do it myself on your computer. It's better to go to your local Linux usage groupers for practical guidance (you can find a list of user groups [here](http://www.linux.org/groups/index.html)).

Note: If the installation problem is related to a particular Linux distribution, it may be appropriate to ask a question on its mailing list, forum, or local user group. In this case, the exact details of the problem should be described. Before doing so, do a careful search using the keywords `Linux` and **all** suspected hardware.

Installation-type issues often rely on the live environment, hardware status, and screen output. If sufficient detail cannot be provided, local user groups, distribution communities, or support channels that can remotely view the environment are often better suited to handle such issues.

## Requests for unlawful or malicious acts [#requests-for-unlawful-or-malicious-acts]

<a id="q9" />

> Question: how can I crack a root account/steal OP privileges/read someone else's mail?

Answer: wanting to do so shows you're a scumbag; wanting a hacker to help you shows you're an idiot!

Don't package vandalism, theft, bypassing authorization, or invasion of privacy as a "technical problem". A responsible technical community will not help you harm others, nor will it engage in illegal or unethical behavior in order to demonstrate technical prowess.

## summarize [#summarize]

These questions are bad because they put the burden of searching, experimenting, defining goals, providing evidence, and taking responsibility on the responder. Questions that are really worth asking should show others that: you've made reasonable preparations and now just need help on a specific, clear, discussable point.
