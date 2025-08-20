import { Tweeter } from "../model/model.js";
import { Render } from "../view/render.js";

debugger
const t = new Tweeter();
const r = new Render

// This should render the initial dummy data
r.renderPosts(t.getPosts());