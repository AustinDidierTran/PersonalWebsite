
(function(){

	var websiteController = angular.module('website', []);

	websiteController.controller('WebsiteController', function(){
		this.articles = articles;
		this.tabs = tabs;
	});

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

	websiteController.controller("PanelController",function(){
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
			value: "Articles",
		},
		{
			tabsID: 1,
			value: "Vidéo",
		},
		{
			tabsID: 2,
			value: "Biographie",
		}


	]



})();

