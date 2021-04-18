import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history.js";
import RecipeGenerator from "./generator.js";
import DisplayRecipe from "./recipeDisplay.js"


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={RecipeGenerator} />
                    <Route path="/recipe" component={DisplayRecipe} />

                </Switch>
            </Router>
        )
    }
}