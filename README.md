# Tabs
Реализация вкладок (табов) в виде функции.
Для использования напишите свои аргументы в вызове функции fnTab('.заголовокВкладок', '.телоВкладок', 'активныйИдентификаторЗаголовков', 'активныйИдентификаторТела');

Заголовок вкладок - элементы, которые переключают вкладки.
Тело вкладок - содержимое вкладок.
Активный идентификатор заголовков - напишите в своем html-документе класс, например, .is-active у первого заголовка. 
Активный идентификатор тела - напишите в своем html-документе класс .is-active у первого содержимого вкладки. Все остальные вкладки (только тело, без заголовков) в css-файле нужно скрыть (display: none;), а в классе .is-active нужно добавить свойство display: block или flex; 

Символ селектора (точка или решетка) ставить в начале активных идентификаторов заголовков и тела не надо.
