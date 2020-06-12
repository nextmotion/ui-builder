import '../layout/header';
import '../layout/footer';
import '../components/dropdown';
import '../components/buttons';
import '../components/close';
import '../components/collapse';
import '../components/grid';
import '../components/images';
import '../components/card';
import '../components/tables';
import '../components/alert';
import '../components/badge';
import '../components/breadcrumb';
import '../components/button-group';
import '../components/carousel';
import '../components/forms';
import '../components/custom-forms';
import '../components/input-group';
import '../components/jumbotron';
import '../components/list-group';
import '../components/media';
import '../components/modal';
import '../components/nav';
import '../components/navbar';
import '../components/pagination';
import '../components/popover';
import '../components/progress';
import '../components/scrollspy';
import '../components/spinners';
import '../components/toasts';
import '../components/tooltip';

import $ from 'jquery'

$(function () {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    $('.toast').toast('show');
})
