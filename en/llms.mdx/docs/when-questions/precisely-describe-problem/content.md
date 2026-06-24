# Precise description of the problem (/en/docs/when-questions/precisely-describe-problem)



Describing the problem accurately is a prerequisite for enabling someone to proceed with the diagnosis. You don't need to write a thesis all at once, but you must provide enough facts so that the respondent doesn't have to repeatedly press for the most basic information first.

## Information to be written clearly [#information-to-be-written-clearly]

* Carefully and clearly describe the symptoms of your problem or bug.
* Describe the environment in which the problem occurred (machine configuration, operating system, applications, and related information), providing the distributor's release and version number (e.g., `Fedora Core 4`, `Slackware 9.1`, etc.).
* Describe how you researched and understood the question before asking it.
* Describe the diagnostic steps taken to identify the problem before asking the question.
* Describe what recent hardware or software changes have been made that may be relevant.
* As far as possible, provide a methodology that can \`reproduce a controlled environment for this problem'.

## Pre-answer possible follow-up questions [#pre-answer-possible-follow-up-questions]

Try to speculate on how a hacker might ask you back, and preemptively answer questions that hackers might ask before you ask them.

You can put yourself in the position of the respondent and think about it:

* Do I know which version, which machine, which configuration the problem occurs in?
* Do I know if it recurs steadily, or occasionally?
* Do I know what the questioner has ruled out?
* Can I reproduce the same problem as described?

If the answer is no, move on to additional information.

## Reproducible environments are particularly important [#reproducible-environments-are-particularly-important]

Of the above points, it's especially important to give hackers an environment where they can reproduce your problem when you're reporting what you think might be in the code. When you do this, your chances of getting an effective answer and speed are greatly improved.

"Reproducible" does not necessarily mean a complete replication of your production environment. A minimal example, a piece of configuration that triggers an error, a set of input data, or an explicit command may be enough for someone to observe the same phenomenon.

## Extended Reading [#extended-reading]

[Simon Tatham](http://www.chiark.greenend.org.uk/~sgtatham/) has written an excellent article called "\[How to report bugs effectively]\([http://www.chiark.greenend.org.uk/\~sgtatham/bugs-cn](http://www.chiark.greenend.org.uk/~sgtatham/bugs-cn) .html)" excellent article. Highly recommend you read it as well.
