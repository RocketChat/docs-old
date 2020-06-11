# Development Workflow

1. Start working on an issue you’re assigned to. If you’re not assigned to any issue, find the issue with the highest priority you can work on, by relevant label and assign it to yourself. Priority is given by milestones. You should always check issues in the current milestone, then short-term, middle-term and long-term in that order.
2. You are responsible for the issue that you're assigned to. If you are not able to do it or you believe you won't make it to the selected milestone, talk to your team, lead or manager to have it reassigned or postponed.
3. Once your code has been deployed in the release-candidate environment, please verify that your changes work as intended. We have seen issues where bugs did not appear in development but showed in production \(e.g. due to merge issues\).

## Choosing something to work on

Start working on things with the highest priority in the current milestone. The priority of items are defined under labels in the repository, but you are able to sort by priority.

After sorting by priority, choose something that you’re able to tackle and falls under your responsibility. Take a good look on our [labels](https://github.com/RocketChat/Rocket.Chat/labels) and see which ones apply for your position.

To filter very precisely, you could filter all issues for:

* Milestone: Whichever is the current version
* Assignee: Unassigned
* Label: Your label of choice. For instance `feat: api`, `feat: integration / plugin`, `feat: webrtc`, `subj: ui/ux`, `subj: security`
* Sort by priority

If you’re in doubt about what to work on, ask your team, lead or manager. They will be able to tell you.

## Creating a Pull Request

Anytime you start to work on something different, make sure you create or switch to a branch specific to the feature you're working on. You can choose to create a Pull Request anytime during your development phase, just make sure you add the label `stat: in progress` while the PR is not ready for merge \(and remember to remove the label when it is\). When naming your Pull Request, please start the name with one the following tags for identifying changes:

* \[NEW\] for new features \(eg.: `[NEW] WhiteBoard integration`\)
* \[FIX\] for bug fixes. You should include the issue number\(s\) in parenthesis, whenever possible. \(eg.: `[FIX] OTR timeout problems (#629, #2535)`\)
* \[BREAK\] for giving proper attention to changes that will break previous versions of Rocket.Chat \(eg.: `[BREAK] Change notification setting type from boolean to string`\)

## Getting your pull request reviewed, approved, and merged

There are a few rules to get your pull request accepted:

1. All checks have passed
2. Travis CI runs automatically when you push your pull request. If Travis fails, take a look at the reasons for failing. If it fails for no apparent reason, try running it again.
3. You must sign the [Contributor License Agreement \(CLA\)](https://cla-assistant.io/RocketChat/Rocket.Chat)
4. At least one team member must approve the Pull Request. If you don't know who to ask for an approval, let your team, lead or manager know you need one, and someone will be assigned as reviewer.

## Finishing a release branch

When the state of the `release-candidate` branch is ready to become a real release, some actions need to be carried out. First, the release branch is merged into `master` \(since every commit on `master` is a new release by definition\). Next, that commit on `master` must be tagged for easy future reference to this historical version. Finally, the changes made on the `release-candidate` branch need to be merged back into `develop`, so that future releases also contain these bug fixes.

The release process is as follows:

```bash
$ git checkout master
Switched to branch 'master'
$ git merge --no-ff release-candidate
Merge made by recursive.
(Summary of changes)
$ git tag -a [version number]
```

To keep the changes made in the release branch, we need to merge those back into develop, though. In Git:

```bash
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff release-candidate
Merge made by recursive.
(Summary of changes)
```

To create the new `release-candidate` based on `develop`:

```bash
$ git checkout release-candidate
Switched to branch 'release-candidate'
$ git merge --no-ff develop
Merge made by recursive.
(Summary of changes)
```

Every team member should strive to thoroughly test the `release-candidate` branch, especially regarding issues they've worked on. Any bug-fixes applied to `release-candidate` should immediately be cherry-picked into `develop`.

You may read all about our branching model on [A successful Git branching model, by Vincent Driessen](http://nvie.com/posts/a-successful-git-branching-model/)

## Hotfixes

Hotfix branches are very much like release branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version. When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the master branch that marks the production version.

Hotfix branches are created from the `master` branch:

```bash
$ git checkout -b hotfix-[current-version].[sub-version] master
Switched to a new branch "hotfix-X.X.X"
```

Then, fix the bug and commit the fix. Later, merge the bugfix into `master` and also into `release-candidate` \(and `develop` if the bugfix cannot wait for the release branch to be finished\).

```bash
$ git commit -m "Fixed severe production problem"
[hotfix-X.X.X abc12d3] Fixed severe production problem
5 files changed, 32 insertions(+), 17 deletions(-)

$ git checkout master
Switched to branch 'master'
$ git merge --no-ff hotfix-X.X.X
Merge made by recursive.
(Summary of changes)
$ git tag -a [current-version].[sub-version]

$ git checkout release-candidate
Switched to branch 'release-candidate'
$ git merge --no-ff hotfix-X.X.X
Merge made by recursive.
(Summary of changes)
```

## Error reporting

We use [GitHub Issues](https://github.com/RocketChat/Rocket.Chat/issues) as our error reporting tool. When creating a new issue, always state the version you're working on \(write the version number, not `latest`\). If you don't know the version you're working on, access `/api/info` on your instance. Include as much detailed information as you can, such as animated gifs and/or screenshots of error, code samples and reproduction steps.

## Labelling issues

To allow for asynchronous issue handling, we use milestones and labels. Leads and product managers handle most of the scheduling into milestones. Labelling is a task for everyone.

Most issues will have labels for at least one of the following:

* Feat \(`feat: accessibility`, `feat: embed`, `feat: livechat`, etc.\)
* Subject \(`subj: mobile`, `subj: security`, `subj: ui/ux`, etc.\)
* Type \(`type: bug`, `type: new feature`, `type: discussion`, etc.\)

All labels are listed on the [labels page](https://github.com/RocketChat/Rocket.Chat/labels).

### Labels for community contributors

Issues that are beneficial to our users, 'nice to haves', that we currently do not have the capacity for or want to give the priority to, are labeled as `contrib:`, so the community can make a contribution. We categorize them into `easy`, `intermediate` and `experts needed` to help contributors pick an issue to work on when joining the project, based on how difficult is the work we believe the issue demands.

