# sxq-widget
It a widget for sign ease

# 使用说明
    该查询小插件可用来查询和展示省心签签约存证记录。
    
# 使用方式
    该插件引入方式有两种：
        1、直接在需要引入的界面中使用 <iframe> 标签引入；
            在使用 <iframe> 标签进行引入时，需要填写三连接（src）、宽度（width）、高度（height）三种参数，
            其中高度与宽度可以按照引入界面的实际情况自定义大小，而链接地址应为  
            http://mock.beancloud.top/anon/front/sxq-widget.htm，
            根据实际使用情况我们定义了各种不同的样式供大家选择，而操控这些样式也十分简单，
            只需要在链接地址后面加上参数即可，每个参数后
            建议用 “&” 进行隔离，以下为可控制的样式参数：
                一、查询部分背景颜色选择（如果没有默认背景颜色为蓝色，）
                    ① sxq-widget-form-blue （蓝色）
                    ② sxq-widget-form-red （红色）
                    ③ sxq-widget-form-grey （灰色）
                    
                二、可禁用参数（如果没有默认所有参数都会加载）
                    ① UNStoreId（禁用存证编号查询）
                    ② UNHashCode(禁用存证哈希查询）
                    ③ UNPhone（禁用手机号码查询）
                    ④ UNCertNo（禁用身份证号码查询）
                    ⑤ UNEmail（禁用邮箱地址查询）
                    ⑥ UNQueryPdf（禁用省心签PDF验真连接）
                    ⑦ UNStoreInfo（禁用查看查询结果详情的按钮）
                    ⑧ UNAllQuery（禁用查询表单模块）
                    ⑨ 如果禁用 ① 到 ⑤ 所有表单查询条件，将会自动隐藏表单查询模块
                    
                三、展示数量控制（如果没有则默认展示10条数据）
                    indexPage=?（问号处可填写你需要展示的数据数量，请注意，这个数量只支持0-99，且只能是两位数字
                                也就是说即使只显示一条数据也必须写成01格式）
                
                四、链接实例
                    http://mock.beancloud.top/anon/front/sxq-widget.htm?
                    bc_widget_query_background_red&UNAllQuery&UNStoreId&indexPage=5
                    该链接即为红色背景，不展示查看详情按钮，禁用存证编号查询，只展示5条最新数据
                
        2、使用本插件中提供的 sxq-widget.js文件引入。
            如果您不想使用 <iframe> 标签来引入我们的查询小插件，您还可以使用我们提供的sxq-widget.js来完成这项工作。
            在使用sxq-widget.js时，只需要在 <div>或是其他元素标签上加上 id="sxq-widget-iframe"即可完成引入。当然，
            具体的引入位置和需要引入的下插件的功能样式也是由您自己来决定的，需要使用的功能参数与方法如出一辙，但是
            只需要将需要的参数写在该元素的标签中的 widget=""属性条即可。
            实例：
                <div style="text-align: center">
                    <div id="sxq-widget-iframe" 
                        style="height: 800px; width: 1000px; display: inline-block" 
                        widget="UNStoreId&UNPhone&sxq-widget-form-grey&indexPage=3">
                    </div>
                </div>
                该模板将引入：禁用存证编号查询，禁用手机号码查询，背景为灰色，每页只显示三条最新数据的查询小插件界面。    
            
    
     

