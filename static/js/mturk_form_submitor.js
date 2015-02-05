// ================================================================
// Function to submit form to Server
// The form is submitted to MTurk after server successfully process the submission
// The HIT is completed after MTurk server receives the submission
// ================================================================
function submit_form(){

    // process answers
    // pack user's response in a dictionary structure and send to the server in JSON format
    answers = [];
    for(i=0; i<questions.length; i++){
        answers.push({
            'ans':  questions[i].ans,
        });
    }
    var ans = JSON.stringify(answers);
    var duration = ($.now()-init_time)/1000;
    duration = duration.toString();
    $("input[name='ans']").val(ans)
    $("input[name='duration']").val(duration)

    // set the resp to send back to the server here
    // the values to send to MTurk has already defined inside #mturk_form
    // if you don't need to bother to set value here
    resp =
    {
    // TODO: set the data to be submitted back to server
    };

    // post ajax request to server
    // if there's no backend to process the request, form can be directly submitted to MTurk
    $.ajax({
      type: "POST",
      // "TODO: set the url of server to process the data",
      url: "",
      data: {'resp':JSON.stringify(resp)}
    }).done(function(data) {
        $('#mturk_form').submit();
    });
}