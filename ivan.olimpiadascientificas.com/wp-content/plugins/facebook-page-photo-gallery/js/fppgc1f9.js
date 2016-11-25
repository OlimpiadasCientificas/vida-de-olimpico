/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function($){ 
_fppg_images()
//==================Load More photos=========================
 $('.fb-PhotoContainer').on('click','.fb-BottomBar',function(){
     
     //get id 
                
                var obj=$(this),
                id=$(this).attr('data-id'),
                page=parseInt(obj.attr('data-page'))+1,
                args=obj.attr('data-next'),
                size=obj.attr('data-size'),
                cont=obj.closest('.fb-container').find('.fb-PhotoContainer'),
                loader=$('<div class="fb-loader"><img src="'+fppgsettings.fppg_url+'/images/loader.gif" /></div>')
               obj.replaceWith(loader);
               $.post(fppgsettings.ajaxurl,{
                    'action':'fppg-getphotos', 
                    'id':id, 
                    'args':args,
                    'page':page,
                    'size':size
                }, function(photos) {
                    photos=$.parseJSON(photos) ; 
                    
                   loader.replaceWith(photos.data)
                   cont.find('.fb-BottomBar').attr('data-page',page)
                   if(photos.paging.next!=""){
                    obj.closest('.fb-container').attr('data-next',photos.paging.next)
                    
                    }
     _fppg_images()
 })
 })
 function _fppg_images(){
           
            if(fppgsettings.fppg_gallery=='Fancybox'){
                $('a.fb-PhotoThumbnail').fancybox({
                    'width':   'fppg_frameWidth' in fppgsettings ?  fppgsettings.fppg_frameWidth: "560" ,
                    'height':    'fppg_frameHeight'in fppgsettings? fppgsettings.fppg_frameHeight:"340" ,
                    'titleShow': 'fppg_showTitle' in fppgsettings? true:   false  ,
                    'cyclic': 'fppg_cyclic' in fppgsettings?   true :  false  ,
                    'titlePosition': 'fppg_titlePosition'in fppgsettings? fppgsettings.fppg_titlePosition:'inside',
                    'padding':   'fppg_padding'in fppgsettings? fppgsettings.fppg_padding:'10' ,
                    'autoScale':  'fppg_imageScale' in fppgsettings?   "true" :  "false"  ,
                    'padding':   'fppg_padding' in fppgsettings? fppgsettings.fppg_padding: "10",
                    'opacity':  'fppg_Opacity' in fppgsettings?   "true" :  "false"  ,
                    'speedIn':   'fppg_SpeedIn' in fppgsettings? fppgsettings.fppg_SpeedIn: "300",
                    'speedOut':  'fppg_SpeedOut' in fppgsettings?  fppgsettings.fppg_SpeedOut :"300",
                    'changeSpeed':    'fppg_SpeedChange'in fppgsettings?  fppgsettings.fppg_SpeedChange: "300",
                    'overlayShow':  'fppg_overlayShow' in fppgsettings?"true" :  "false"  ,
                    'overlayColor':   'fppg_overlayColor'in fppgsettings?  fppgsettings.fppg_overlayColor: '#666',
                    'overlayOpacity':   'fppg_overlayOpacity'in fppgsettings?  fppgsettings.fppg_overlayOpacity: "0.3",
                    'centerOnScroll':  'fppg_centerOnScroll' in fppgsettings?  "true" :  "false"  ,
                    'enableEscapeButton':  'fppg_enableEscapeButton'in fppgsettings?   "true"  : "false"  ,
                    'showCloseButton':  'fppg_showCloseButton'in fppgsettings?   "true" :  "false"  ,
                    'hideOnOverlayClick': false, //'fppg_hideOnOverlayClick'in fppgsettings?   "true" :   "false"  ,
                    'hideOnContentClick': false, //'fppg_hideOnContentClick' in fppgsettings?  "true" :  "false" , 
                    //'OnStart:':'fppg_callbackOnStart' in fppgsettings? fppgsettings.fppg_callbackOnStart:  null ,
                    //'OnComplete':'fppg_callbackOnShow'in fppgsettings? fppgsettings.fppg_callbackOnShow :null,
                    'OnClosed':'fppg_callbackOnClose'in fppgsettings? fppgsettings.fppg_callbackOnClose:null
                })
            }
            if(fppgsettings.fppg_gallery=='PrettyPhoto'){
    
                $(' a.fb-PhotoThumbnail').prettyPhoto({
                    'default_width':   'fppg_frameWidth' in fppgsettings ?  fppgsettings.fppg_frameWidth: "560" ,
                    'default_height':    'fppg_frameHeight'in fppgsettings? fppgsettings.fppg_frameHeight:"340" ,
                    'show_title': 'fppg_showTitle' in fppgsettings? true:   false  ,
                    'padding':   'fppg_padding'in fppgsettings? fppgsettings.fppg_padding:'10' ,
                    'allow_resize':  'fppg_imageScale' in fppgsettings?   "true" :  "false"  ,
                    'opacity':  'fppg_Opacity' in fppgsettings?   "true" :  "false"  ,
                    'animation_speed':    'fppg_SpeedChange'in fppgsettings?  fppgsettings.fppg_SpeedChange: "300"
                });
            }
 
 
        }
})