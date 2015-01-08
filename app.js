
(function(){

	var websiteController = angular.module('app', []);
	
	websiteController.controller('WebsiteController', ['$scope', function($scope){
		$scope.accueil = accueil;
		$scope.articles = articles;
		$scope.socials = socials;
		$scope.experiences = experiences;
		$scope.scolaires = scolaires;
		$scope.tabs = tabs;
		}]);

	var accueil = {
		
		title: "Bienvenue sur mon site web!",
		content: "Je suis heureux de vous avoir sur mon site web personnel! Je tenterai d'être concis dans mes textes car je sais que votre temps est précieux. Ce site est actuellement à ses débuts, donc il n'y a pas beaucoup de contenu. Présentement, dans les onglets, vous avez accès à mes comptes sur mes réseaux sociaux si jamais vous désirez me contacter! Pour ce qui est du reste du site web, je travaille présentement sur d'autres projets et ils y seront présentés dès que des versions publiques seront dévoilées. Je considèrerai d'autre contenu lorsque j'en verrai la pertinence!",
		conclusion:"Votre opinion m'importe beaucoup, n'hésitez pas à me faire parvenir vos commentaires!",
		picture: "Accueil.jpg",
	}
	
	var socials = [
	
	{
		socialID: 0,
		name: "Facebook",
		content: "Deviens mon ami sur Facebook!",
		picture: "Facebook.jpg",
		link: "https://www.facebook.com/austin.didier.tran",
	},
	{
		socialID: 1,
		name: "LinkedIn",
		content: "Connecte avec moi sur LinkedIn!",
		picture: "LinkedIn.png",
		link: "https://www.linkedin.com/profile/view?id=234718089&trk=nav_responsive_tab_profile_pic",
	},
	{
		socialID: 2,
		name: "Twitter",
		content: "Suis-moi sur Twitter!",
		picture: "Twitter.png",
		link: "https://twitter.com/Austin_Didier",
	},
	{
		socialID: 3,
		name: "Email",
		content: "Envoie moi un email!",
		picture: "Email.png",
		link: "mailto:tran.austin.didier@gmail.com?subject=Bonjour Austin-Didier Tran!",
	},
	{
		socialID: 4,
		name: "Google+",
		content: "Ajoute-moi dans tes cercles d'amis!",
		picture: "googleplus.gif",
		link: "https://plus.google.com/101165324528144458496/posts?hl=fr",
	}
	
	]
	
	var experiences = [
	
	{
		experienceID: 0,
		employer: "Restaurant Chez Linh",
		location: "Sherbrooke",
		duration: "Depuis 2009",
		title: "Serveur",
		description: "En tant que serveur, je m'occupe de l'accueil ainsi que du service au table. De plus, avec l'expérience que j'ai maintenant, je suis chargé de former les nouveaux employés afin qu'ils deviennent autonomes dans leur nouveau travail.",
	},
	{
		experienceID: 1,
		employer: "Séminaire de Sherbrooke",
		location: "Sherbrooke",
		duration: "Depuis 2012",
		title: "Entraîneur-Chef",
		description: "En tant qu'entraîneur-chef dans une équipe scolaire, mon but est de promouvoir le sport qu'est l'ultimate et de développer les joueurs de mon équipe tout en leur offrant un environnement d'apprentissage agréable. Avec la première équipe que j'ai entraîné, j'ai gagné deux championnats de la saison ainsi qu'une médaille de bronze, une médaille d'argent ainsi qu'une médaille d'or. Maintenant, j'en suis avec ma deuxième équipe et j'en suis actuellement dans une phase de développement pour éventuellement viser une championnat de la saison et une médaille d'or en éliminatoires.",
	},
	{
		experienceID: 2,
		employer: "Groupe de Courtage Omni Ltée",
		location: "Sherbrooke",
		duration: "Été 2014",
		title: "Marchandiseur",
		description: "En tant que marchandiseur, mon but est d'assister les représentants du Groupe de Courtage Omni Ltée. Je visite les épiceries, place les commandes effectuées par mon représentant et communique avec ce dernier afin de l'informer de toutes informations qu'il juge pertinente.",
	},
	{
		experienceID: 3,
		employer: "Nordia",
		location: "Sherbrooke",
		duration: "Été 2013",
		title: "Agent au Service à la Clientèle",
		description: "En tant qu'agent au service à la clientèle, je répondais aux appels de clients du service prépayé ainsi qu'aux appels de clients de service postpayé. Par la suite, j'écoutais les clients, je décelais son problème et je trouvais une solution qui allait satisfaire le client.",
	}
	
	]
	
	var scolaires = [
	
	{
		scolaireID: 0,
		institution: "Université de Sherbrooke",
		field: "Génie informatique",
		duration: "Automne 2014 à Automne 2018",
		
		description: "Description bro",
	},
	{
		scolaireID: 1,
		institution: "Université de Sherbrooke",
		field: "Administration des affaires",
		duration: "Automne 2013 à Été 2014",
		description: "Description bro",
	}
	
	]
	
	var articles = [

		{
			articleID: 0,
			date: "5 novembre 2014",
			content: "Ceci est le premier article jamais écrit dans mon site web",
			author: "Austin-Didier Tran",
			picture: "Chat.JPG",
		},
		{
			articleID: 1,
			date: "5 novembre 2014",
			content: "Wow, je suis maintenant capable d'écrire deux articles dans mon site web",
			author: "Austin-Didier Tran",
			picture: "Chat.JPG",
		}


		]

	websiteController.controller("PanelController", function(){
		this.tab = 0;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		};
	});

	var tabs = [

		{
			tabsID: 0,
			value: "Accueil",
		},
		{
			tabsID: 1,
			value: "Social",
		},
		{
			tabsID: 2,
			value: "Expériences Professionnelles",
		},
		{
			tabsID: 3,
			value: "Parcours Scolaire",
		}


	]



})();

