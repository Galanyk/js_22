import $ from "jquery";
import MainController from "./main.controller";
import dist from "./index.html";
import ("./some.css");


const $container = $("#root");
new MainController($container);