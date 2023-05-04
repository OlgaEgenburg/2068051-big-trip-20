import NewFilter from './view/filter.js';
import NewSorting from './view/new-sort.js';
import TripInfo from './view/trip-info.js';
import NewForm from './view/form-create';
import {render} from './render.js';

const pageHeader = document.querySelector('.page-header');
const siteFilters = pageHeader.querySelector('.trip-controls__filters');
const mainSorting = document.querySelector('.trip-events');
const tripInfo = pageHeader.querySelector('.trip-main');


render(new NewSorting(), mainSorting);
render(new TripInfo(), tripInfo);
render(new NewFilter(), siteFilters);
render(new NewForm(), mainSorting);

