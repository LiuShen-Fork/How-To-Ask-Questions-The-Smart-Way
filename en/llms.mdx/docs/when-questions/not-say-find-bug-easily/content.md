# Don't claim to have found a bug. (/en/docs/when-questions/not-say-find-bug-easily)



When you have a problem with software, don't claim to have found a bug unless you are very, **very** well-founded.Hint: Unless you can provide a source code patch that solves the problem, or regression tests that show incorrect behavior in the previous version, you are more than likely not completely sure. The same applies to web pages and documents; if you (claim to) have found a `bug` in a document, you should be able to provide a fix or replacement file in the appropriate location.

## A Possible Bug Requires Evidence [#a-possible-bug-requires-evidence]

Remember, there are many other users who are not experiencing the problems you found, or you would have found them when reading the document or searching the web (you \[already did all this, didn't you] before complaining (# before asking the question)?) . It also means that it's likely that you're mistaken rather than the software itself being faulty.

If you suspect a bug, please try to provide it:

* Minimum Reproduction Step.
* Differences in behavior between current and historical versions.
* A clear basis for expected behavior, such as a document or specification.
* logs, test cases, patches, or failed regression tests.

## Allegations detract from the atmosphere of dialogue [#allegations-detract-from-the-atmosphere-of-dialogue]

People who write software always work very hard to make it as perfect as possible. If you claim to have found a bug, you are also questioning their ability to do so, and even if you are right, there is a chance that you will offend some part of them. This is especially serious when you yell about `bugs` in your title.

## Report in a humble but clear manner [#report-in-a-humble-but-clear-manner]

When asking a question, even if you're privately very sure you've found a real bug, it's best to write it like **you** did something wrong. If there really is a bug, you'll see that in the reply. By doing this, the maintainer will apologize to you if there really is a bug, which is a bit better than if you annoy someone and then owe them an apology.

For example, change `This library is buggy` to `In this minimal example, the behavior of 2.1.0 does not match the documentation; am I missing a configuration? `. This way of writing preserves the severity of the problem and leaves room for judgment on the part of the maintainer.
