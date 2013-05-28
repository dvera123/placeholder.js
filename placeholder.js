/**
 * 
 * @Author: Diego Vera Jiménez
 * 
 * 
 */
var placeholder = {

  init: function(formId, attrs){
    if(attrs.length > 0 && attrs!=undefined && $('#'+formId).is('form')){
      placeholder.addValues(formId, attrs);
      placeholder.focus(formId, attrs);
      placeholder.blur(formId, attrs);
      placeholder.submit(formId, attrs);
    }
  },
  addValues: function(formId, attrs){
    for(var x=0; x<attrs.length; x++ ){
      var input = $('#'+formId+' '+'#'+attrs[x].id);
      input.attr('value',attrs[x].value);
      input.addClass('placeholder');
      input.addClass('no-submit');
    }
  },
  focus: function(formId, attrs){
    $('#'+formId+' '+'.'+'placeholder').focus(function(){
      var target = $(this);
      for(var x=0; x<attrs.length; x++ ){
        if(target.attr('id')==attrs[x].id && target.val()==attrs[x].value){
          target.attr('value', '');
          break;
        }
      }
    });
  },
  blur: function(formId, attrs){
    $('#'+formId+' '+'.'+'placeholder').blur(function(){
      var target = $(this);
      for(var x=0; x<attrs.length; x++ ){
        if(target.attr('id')==attrs[x].id && target.val()===""){
          target.attr('value', attrs[x].value);
          target.addClass('no-submit');
          break;
        }
        else{
          target.removeClass('no-submit');
        }
       } 
    });
  },
  submit: function(formId, attrs){
    var form, valid;
    form = $('#'+formId);
    form.submit(function(){
      if(form.children().hasClass('no-submit')){
        return false;
      }
      return true;
    });
  }
}

$(document).ready(function(){
  
  placeholder.init('searchformhead',
    [{
      id:'s',
      value:'Search here'
    }]
    );
  placeholder.init('searchPageForm',
		    [{
		      id:'sp',
		      value:'Keywords'
		    }]
		    );
  
});
