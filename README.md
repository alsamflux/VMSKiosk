# VMSKiosk
This is an experimental kiosk using vueitify as the base framework.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Babel
https://medium.com/front-end-hacking/what-are-npm-yarn-babel-and-webpack-and-how-to-properly-use-them-d835a758f987
Babel is a JS transpiler that converts new JS code into old ones.

# ES6? 7?
Which are we using?

# Vue
Works pretty good.

# Vuetify

# Bootstrap

# BootstrapVue
https://bootstrap-vue.js.org/docs/components/layout/

# jQuery

# HTML

# CSS

# PostCSS
Used for autoprefixing

# Webpack
We would also like to use SASS for our styles, PostCSS for autoprefixing. Plus, we would like to minify and uglify both our CSS and Javascript code. Webpack solves all of these problems using one config file (named webpack.config.js) and one CLI command webpack.

Webpack is a modular build tool that has two sets of functionality — Loaders and Plugins. Loaders transform the source code of a module. For example, style-loader adds CSS to DOM using style tags. sass-loader compiles SASS files to CSS. babel-loader transpiles JS code given the presets. Plugins are the core of Webpack. They can do things that loaders can’t. For example, there is a plugin called UglifyJS that minifies and uglifies the output of webpack.

https://webpack.js.org/configuration/

Installed 7/19/18

# npm
The JavaScript node package manager, typically abbreviated in all lowercase as npm, is the default method for managing packages in the Node.js runtime environment. It relies upon a command line client and a database made up of public and premium packages known as the the npm registry. Users can access the registry via the client and browse the many packages available through the npm website. Both npm and its registry are managed by npm, Inc.

# yarn
https://www.keycdn.com/blog/npm-vs-yarn/
Developed by Facebook in attempt to resolve some of npm’s shortcomings. Yarn isn’t technically a replacement for npm since it relies on modules from the npm registry. Think of Yarn as a new installer that still relies upon the same npm structure. The registry itself hasn’t changed, but the installation method is different. Since Yarn gives you access to the same packages as npm, moving from npm to Yarn doesn’t require you to make any changes to your workflow.

Use Chocolatey

choco install yarn

scoop install yarn

Please whitelist your project folder and the Yarn cache directory (%LocalAppData%\Yarn) in your antivirus software, otherwise installing packages will be significantly slower as every single file will be scanned as it’s written to disk.

Despite enabling faster installs, Yarn also adds to your disk space usage since it stores dependencies locally.

# pnpm
Based on benchmarks performed by Intoli, pnpm is indeed faster than both Yarn and npm in many cases. It also doesn’t eat up disk space like Yarn does. That’s because pnpm circumvents having to copy locally cached source files by leveraging hardlinks and symlinks.

# gulp
I don't think it's working. No app/style.css file is being output.

#vue-router

https://appdividend.com/2018/07/13/vue-history-mode-routing-tutorial/ (When using history mode, the URL will look “normal,” )

#Volunteer Clustering
Subsumption relations
Inclusion relations
Set membership - Unity, Dyad, Triad, Family Unit, Organizational unit
Family Structure
smallest family unit would consist of one dyad
extended family, ploygamous family, nuclear family
The dyad leadership structure
household
A fundamental social group in society typically consisting of one or two parents and their children.
A unit of related individuals
A family group is any two or more people (not necessarily including a householder) residing together, and related by birth, marriage, or adoption. A household may be composed of one such group, more than one, or none at all. The count of family groups includes family households, related subfamilies, and unrelated subfamilies.
Individual collective grouping unit
An affiliated service group means a group of two or more organizations that have a service relationship and, in some. cases, an ownership relationship.
A controlled group of businesses is a group of related businesses that have common ownership. If a controlled group exists as defined by the applicable Code sections and associated Regulations, the employees of those businesses are considered together for certain qualified plan requirements.
An affiliated group is two or more corporations that are related through common ownership, but are treated as one for federal income tax purposes. An affiliated group consists of a parent corporation and one or more subsidiary corporations.
Sole Proprietorship
In law, a legal entity is an entity that is capable of bearing legal rights and obligations, such as a natural person or an artificial person (e.g. business entity or a corporate entity
A legal person (in legal contexts often simply person, less ambiguously legal entity) is any human or non-human entity, in other words, any human being, firm, or government agency that is recognized as having privileges and obligations, such as having the ability to enter into contracts, to sue, and to be sued.
So there are of two kinds of legal entities, human and non-human: natural persons (also called physical persons) and juridical persons (also called juridic, juristic, artificial, legal, or fictitious persons, Latin: persona ficta), which are other entities (such as corporations) that are treated in law as if they were persons.[4][8][9]
personage, personhood
A legal entity can be composed of many people, but has the capacity to function in the same way that an individual can, legally speaking.
social group
    family unit
    dyad
primary unit of society
Childless family
Step family
Grandparent family
copreneurial couple, to the multigenerational owned and managed firm
family firms and nonfamily firms
unified systems model of family firm performance that demonstrates
how the systemic interactions of the family unit, business entity, and individual family
members are linked to performance outcomes.

The family business social system is a ‘‘metasystem’’ comprised of three broad subsystem
components: (1) the controlling family unit—representing the history, traditions, and life
cycle of the family; (2) the business entity—representing the strategies and structures utilized
to generate wealth; and (3) the individual family member—representing the interests, skills,
and life stage of the participating family owners/managers

EntityRepresentativeForm

EntitySocialUnit
EntityGroupFormat
RepresentativeFormat

A social group is a collection of people who interact with each other and share similar characteristics and a sense of unity. ... A social category can become a social group when the members in the category interact with each other and identify themselves as members of the group.

Analyze the dynamics of dyads, triads, and larger social networks

Units of Analysis as Related to Sociology

Units of analysis are the objects of study within a research project. In sociology, the most common units of analysis are individuals, groups, social interactions, organizations and institutions, and social and cultural artifacts

A social aggregate is a collection of people who are in the same place at the same time, but who otherwise do not necessarily have anything in common, and who may not interact with each other. A social aggregate is different from a social group, which refers to two or more people who interact regularly and who have things in common, like a romantic couple, a family, friends, classmates, or coworkers, among others. A social aggregate is also different from a social category, which refers to a group of people defined by a shared social characteristic, like gender, race, ethnicity, nationality, age, class, etc.

the group is not an association of concrete individuals by a synthesis of members' roles.

A social network is a social structure between actors, either individuals or organizations.
the status of supra-individual actors
actors-individuals, organizations, nation states-are autochthonous and natural entities
actorhood

authorized agentic capability as an essential feature of what modern theory and culture call an "actor,"
corporate actors
actors being individuals or individual organizations
framework for specifying different categories of actors at different levels of aggregation

or agents
 actor typology
  we refer to individual and collective actors as participants in purposive actions in an attempt to prevent or generate change [24]. Agency, then, relates to actor behavior with regard to such change [25]. Agency implicitly underlines the “undetermined nature of human action, as opposed to the alleged determinism of structural theories
collectivities (group actors)
fruitful actor designations
This includes behaviour at the individual and household levels
Member Relationships
Actor Node Type
Actor–network theory
exploring the relational ties within a network
Actants denote human and non-human actors, and in a network take the shape that they do by virtue of their relations with one another.
As soon as an actor engages with an actor-network it too is caught up in the web of relations, and becomes part of the entelechy.
such properties as intentionality fundamentally distinguish humans from animals or from “things”
Understanding expanding actorhood among firms is important because, in acquiring the traits of modern actors (i.e., bounded, autonomous, purposive entities
The concept of actorhood is prominent in institutional theory and has its roots in Max Weber's interpretive sociology of social action
Actorhood means the enhanced standing of the entities involved and their empowered comprehension of the scientized and rationalized environment in which they are to act.
An Obligatory Passage Point (OPP) is a concept that is used to denote a single node.
Focal Actants
Semiotic rationality
Punctualization refers to the event when a network acts like a singular unit, thereby allowing it to ‘disappear’ and be replaced by the action
itself and the seemingly simple creator of that action
So if we find a stable network we can punctualize it and consider it a single actor.
nonhuman technological actants
social actors, technological actants, work-practice activities
audiences
human actors (e.g., journalists, technology specialists, and businesspeople);
technological actants (e.g., algorithms, networks, and content management systems);
and audiences (e.g., assemblages of audiences distinct to certain platforms, devices, or
applications)
The second group of actors, businesspeople, would include marketers, sales
associates, customer relationship managers, analysts specialized in big data and
behavioral targeting

The term actants, as we define it, refers generally to material objects that are
notable for their association with human actors and the activities they undertake in
conjunction with such objects. We invoke the term carefully but purposefully. We
recognize that in the context of actor-network theory (ANT), a sociological and
methodological approach concerned with tracing associations (“following the actors to
where they lead the researcher,” in the common refrain), the term actant may refer to
any actor, human or nonhuman, that is engaged in a networked system under scrutiny
ANT adherents typically eschew most a priori categories altogether
Does a technological object like a
content management system (CMS), application programming interface (API), or set of
software code make a difference in the course of some actors’ activities or not?

This is a methodological principle that states that researchers should refute all pre given distinctions between classes of possible actors (natural/social, local/global, and economic/cultural) and treat these categories as symmetrical effects of relational practices. Consequently, ANT approaches the world as consisting of heterogeneous relations and practices through which humans and nonhumans alike are treated as possible actors. This basically means that we cannot take anything as given, as everything is an effect of relational practices. Actors are assembled and structures are arranged in a recursive process of networking or translation. Through the filter of ANT, the world is depicted as a mobile arrangement. It thus seeks to abandon much of the conceptualization of the modern episteme that rests on binary terms and dichotomous relations between purified categories such as nature and society.

heterogeneous actants. This means that networks are always actor-networks.
Mapping civil society with social network analysis: Methodological possibilities and limitations

binary, simply indicating the presence or absence of a tie
Moreover, actors can simultaneously
be connected by several different relations.
Schoolchildren can be connected by relations
of friendship, trust, or animosity, each
of which may inform different aspects of a student’s
social world. In practice, most research
within the social sciences—and by extension
most of the research in this review—has focused
on single-relation, binary networks.

: (a) assortative perspectives
that emphasize compatibilities and complementarities
between actors’ attributes; (b) relational
perspectives that draw on the structuralistic
assumption that trust, information, and

Assortative mechanisms speculate that the
creation, persistence, and dissolution of social
relationships are all outcomes that rely on
the compatibility and complementarity of
actors’ attributes
Actors Internal Relational Context
- Organization (acting as)
- Family
- Couple
- Individual

