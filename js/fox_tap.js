
/*
 ����1:�󶨵�domԪ��
 ����2:�ص�����
 */
function fox_tap(element,callBack) {
    // ��touch�¼�
    /*
     ���� start �� end�� ʱ���
     ���ʱ��� �ܳ� ҲʧЧ  if(time>200)
     ���move������ ��ʧЧ

     */

    // 1. ����һЩ����ı���
    // ��ʼ��ʱ��
    var startTime = 0;

    // ��ʾ �Ƿ񴥷��� move�¼�
    var isMove =false;

    // ���� ���� �ӳ�ʱ��
    var maxTime = 250;

    element.addEventListener('touchstart',function (e) {
        // ��¼��ʼʱ��
        startTime = Date.now();

        // ���� ���Ǳ�ʾ������ֵ
        isMove = false;
    })
    element.addEventListener('touchmove',function (e) {
        // �޸ı�ʾ����
        isMove = true;
    })
    element.addEventListener('touchend',function (event) {
        if (isMove == true) {
            // console.log('ʧЧ');
            return;
        }
        // �ж� �ӳ��ӳٵ�ʱ��
        if ((Date.now()-startTime)>maxTime) {
            // console.log('̫����,�����ڳ�����');
            return;
        }

        // ����ܹ�������
        // console.log('�ɹ�');
        callBack(e);
    })
}