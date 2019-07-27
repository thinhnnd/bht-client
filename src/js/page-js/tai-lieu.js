function showFacultyCourses(facultyName) {
    if( !$(`#${facultyName}`).hasClass("active")) {
        $(`#${facultyName}`).addClass("active")

    }
    else {

        $(`#${facultyName}`).removeClass("active")

    }
}

function showUploadModal () {
    console.log('click')
    if($('#upload-modal').hasClass('active')) 
    {
        $('#btn-upload').removeClass('active')
        $('#upload-modal').removeClass('active')

    }
    else {
        $('#upload-modal').addClass('active')
        $('#btn-upload').addClass('active')

    }
}

function closeModal(modalId) {
    $(`#${modalId}`).removeClass('active')
    $('#btn-upload').removeClass('active')

}

$( document ).ready(function() {
    $('#btn-upload').click(showUploadModal)
});

