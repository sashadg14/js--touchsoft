QUnit.module('Chat creation');

QUnit.test('Check styles creation', function (assert) {
    assert.ok(createStyles() != null, 'The test is successful');
});

QUnit.test('Check chat window creation', function (assert) {
    assert.ok(createChatWindow() != null, 'The test is successful');
});

QUnit.test('Check msg area creation', function (assert) {
    assert.ok(createMsgContainer() != null, 'The test is successful');
});

QUnit.test('Check minimize btn creation', function (assert) {
    assert.ok(createMinimizeBtn() != null, 'The test is successful');
});

QUnit.test('Check history area creation', function (assert) {
    assert.ok(createMsgTextArea() != null, 'The test is successful');
});

QUnit.test('Check send msg btn creation', function (assert) {
    assert.ok(createSendMsgBtn() != null, 'The test is successful');
});

QUnit.module('Chat functional');
QUnit.test('Check change window state', function (assert) {
    if (chatWindow.classList.contains('maximized-window')) {
        changeWindowState();
        assert.ok(chatWindow.classList.contains('minimized-window'), 'The test is successful');
    }
    if (chatWindow.classList.contains('minimized-window')) {
        changeWindowState();
        assert.ok(chatWindow.classList.contains('maximized-window'), 'The test is successful');
    }
});

QUnit.test('Check append line in chat and stor it', function (assert) {
    msgContainer.innerHTML = "";
    var data = new Date();
    appendLineInChat("Вы", "blabla");
    var time = data.getHours() + ':' + data.getMinutes();
    var line = time + ' ' + 'Вы' + ': ' + "blabla";
    assert.ok(((line + "\n") === msgContainer.innerHTML), 'The test is successful');
    var found = false;
    var stor = messageStor.getArray();
    for (var i = 0; i < stor.length; i++) {
        if (stor[i][0] === 'Вы' && stor[i][1] === 'blabla' && stor[i][2] === time) {
            found = true;
            break;
        }
    }
    assert.ok(found, 'The test is successful');
});
