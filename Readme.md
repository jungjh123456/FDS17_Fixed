# 오늘 배운 내용

1. 목차
  - !doctype html
  - strict, Transitional DTD
  - HTML 표준
  - HTML에서 중요한 것

# !doctype


랜더링 표준 모드를 랜더링 하는 방식


## !doctype html 

** (DTD(Document Type Definition)) **의 약자로 컴퓨터 용어로, SGML 꼐열의 마크업 언어에서
문서 형식을 정의하는 것이다. SGML을 비롯해 HTML,XHTML,XML등에서 쓰인다.

[DTD](http://www.w3.org/TR/html4/loose.dtd"DTD사이트입니다.") DTD 사이트 입니다.

## Strict, Transitional DTD

W3c가 제안한 HTML 규격의 DTD 항목에는 다음과 같이 설명되어 있습니다.
"Strict 타입은 W3C가 스타일시트 사용을 장여하기 위해 단계적으로 사라질 '표현'에 관한 태그와 속성을 배제한 문서 타입이다.
웹 문서 제작자는 가능하다면 Strict 타입을 사용해야 하지만, 불가피하게 표현을 담당하는 속성이 필요할 경우에는 Transitional타입을 사용할 수도 있다. 즉 Strict DTDrk W3C가 의도했던 문서 타입이고, Transitional DTD는 '과도적인'이라는 단어의 의미처럼 기존에 만들어진 문서들과의 호환성을 위해서 만들어진 것임을 알 수 있다. 과거의 모든 문서들을 Strict DTD에 맞게 바꾸려면 엄청난 변화가 필요하므로 그 중간 단계로 Transitional DTD를 설정한다. "

## HTML 표준
HTML5이전의 표준 버전은 HTML4 버전(4.01버전)이 있다. 지금도 최근 표준이다.
XHTML은 4.0버전이랑 같다고 봄
HTML4버전은 규칙 일관성이 없어서 단점이 많다 그래서 중간에 XHTML을 만들고
이것을 마크업HTML이라고 부른다.

## HTML에서 중요한것
HTML에서 중요한건 적절한 명령어를 생각해서 태그를 만든다. 예를들어 xml
같은 것은 모든 명령어는 소문자, 속성="값" 정형화 식으로 만든다.
그 이후 HTML5가 나온다.
!doctype이 없으면 비표준에 해당한다.

## HTML HEAD영역 html lang = ""
HTML lang속성은 웹 접근성에 관한 내용이다. lang속성에 명시된 값을 통해 스크린 리더가 
인식을 하기 때문이다. 스크린 리더는 시각 장애인을 위한 보조공학이고 예를 들어 카카오톡 메시지 확인 할때
음성이 들린다.

## HTML HEAD영역 UTF-8

UTF-8은 세계의 거의 모든 문자와 기호를  포함한다. 이것이 없으면 한글이 깨질 수 있다.

## HTML Title

Title요소는 검색 최적화 하고도 연관 되어 있다.(검색 엔진 최적화)
지켜야 할 것은 준수 하고 중심 키워드는 유니크 해야한다.