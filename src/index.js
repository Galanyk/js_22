import $ from "jquery";
import MainController from "./main.controller";
import dist from "./index.html";
import ("./index.css");


const $container = $("#root");
new MainController($container);