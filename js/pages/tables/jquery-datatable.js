$(function () {
    $('.js-basic-example').DataTable({
        responsive: true
    });

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            {
           extend: 'excel',
           messageTop: 'Election primaire 2022',
           exportOptions : {
            columns:[0,1,2,3,4]
        }
       },
       {
           extend: 'pdf',
           messageTop: 'Election primaire 2022',
            exportOptions : {
            columns:[0,1,2,3,4]
        }
       },
           {
           extend: 'print',
           exportOptions : {
            columns:[0,1,2,3,4]
        },
            customize: function(win){
                $(win.document.body)
                        .css('font-size','10pt')
                        .prepend('<img src="../../images/medal.png" style="position:absolute;top:0;left:0;"');
               
            }
        
    }
        ]
        
        
    });
    
  
        
   
});