/**
 * Created by dominik on 26.12.16.
 */

function setAdminProperties()
{
    var tabs = document.getElementsByName("hidden-if-read-only");
    for(var i = 0; i < tabs.length; i++)
    {
        tabs[i].style.display="initial";
    }
}

function checkPremission(baseUrl)
{
    AJS.$.ajax({
        url: baseUrl + "/rest/admin-helper/latest/hardware/getReadOnlyStatus",
        type: "GET",
        success: function (data) {
            if(data.isReadOnly === true) {
                initHardwareVelocityReadonly(baseUrl);
            }
            else{
                initHardwareVelocityAdmin(baseUrl);
            }
        },
        error: function (err) {
            AJS.messages.error({
                title:"There was an Error!",
                body:err.responseText
            })
        }
    });
}
