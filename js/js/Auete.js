// ��������֤
var rule = {
    title:'Auete',
    host:'https://auete.com',
    // url:'/fyclassfyfilter/indexfypage.html[/fyclassfyfilter/index.html]',
    url:'/fyclassfyfilter/indexfypage.html[/fyclassfyfilter/index.html]',
    filterable:1,//�Ƿ����÷���ɸѡ,
    filter_url:'{{fl.class}}',
    filter: {"Movie":[{"key":"class","name":"����","value":[{"n":"ȫ��","v":""},{"n":"ϲ��Ƭ","v":"/xjp"},{"n":"����Ƭ","v":"/dzp"},{"n":"����Ƭ","v":"/aqp"},{"n":"�ƻ�Ƭ","v":"/khp"},{"n":"�ֲ�Ƭ","v":"/kbp"},{"n":"���Ƭ","v":"/jsp"},{"n":"ս��Ƭ","v":"/zzp"},{"n":"����Ƭ","v":"/jqp"}]}],"Tv":[{"key":"class","name":"����","value":[{"n":"ȫ��","v":""},{"n":"����","v":"/oumei"},{"n":"����","v":"/hanju"},{"n":"�վ�","v":"/riju"},{"n":"̩��","v":"/yataiju"},{"n":"����","v":"/wangju"},{"n":"̨��","v":"/taiju"},{"n":"����","v":"/neidi"},{"n":"�۾�","v":"/tvbgj"},{"n":"Ӣ��","v":"/yingju"}]}],"Zy":[{"key":"class","name":"����","value":[{"n":"ȫ��","v":""},{"n":"����","v":"/guozong"},{"n":"����","v":"/hanzong"},{"n":"����","v":"/meizong"}]}],"Dm":[{"key":"class","name":"����","value":[{"n":"ȫ��","v":""},{"n":"����","v":"/donghua"},{"n":"����","v":"/riman"},{"n":"����","v":"/guoman"},{"n":"����","v":"/meiman"}]}],"qita":[{"key":"class","name":"����","value":[{"n":"ȫ��","v":""},{"n":"��¼Ƭ","v":"/Jlp"},{"n":"����Ƭ","v":"/Jdp"},{"n":"�����","v":"/Jdj"},{"n":"�����Ӱ","v":"/wlp"},{"n":"�����ϵ�Ӱ","v":"/laodianying"}]}]},
    searchUrl:'/search.php?searchword=**',
    searchable:2,//�Ƿ�����ȫ������,
    quickSearch:0,//�Ƿ����ÿ�������,
    headers:{
        'User-Agent':'PC_UA',
    },
    class_parse:'.mr-auto li:gt(0):lt(6);a&&Text;a&&href;/(\\w+)/index.html',
    //class_name:'��Ӱ&���Ӿ�&����&����&����',
    //class_url:'Movie&Tv&Zy&Dm&qita',
    play_parse:true,
    lazy:'',
    limit:6,
    �Ƽ�:'*',
    һ��:'.threadlist .trans_3;.title&&Text;.lazy&&src;.hdtag&&Text;a&&href',
    ����:{
        "title":".cover a&&title;.message p:eq(7)&&Text",
        "img":".cover img&&src",
        "desc":".w-100&&Text;.message p:eq(10)&&Text;.message p:eq(9)&&Text;.message p:eq(6)&&Text;.message p:eq(4)&&Text",
        "content":".message p:eq(-1)&&Text",
        "tabs":"#player_list h2",
		"tab_text":"h2--span&&Text",
        "lists":"#player_list:eq(#id) li"
    },
    ����:'.card-body .media;.text-danger&&Text;;.data&&Text;a&&href',
}
