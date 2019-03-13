# 알고리즘을 통한 JS 문법 익히기

## 시작하기

1. https://github.com/IanL90/node_and_react_study 을 본인의 github 계정으로 fork합니다.

![Set_Assignment_1](../assets/Set_Assignment_1.png)

2. fork한 원격 repository의 URL을 복사합니다.(주의: 원본(중앙 원격) repository가 아닌 방금 fork한 원격 repository의 URL을 복사해야 합니다!)

![Set_Assignment_2](../assets/Set_Assignment_2.png)

3. 터미널을 실행한 후, 방금 복사한 URL을 붙여넣어 로컬로 clone합니다.

```bash
git clone [복사한 URL]
```

![Set_Assignment_3](../assets/Set_Assignment_3.png)

4. 터미널에서 clone한 repository로 이동한 후, [원본 repository](https://github.com/IanL90/node_and_react_study)를 upstream이라는 별칭으로 추가합니다.

```bash
cd node_and_react_study
git remote add upstream https://github.com/IanL90/node_and_react_study
```

## 과제 제출하기

1. 자신의 영문 이름으로 폴더를 생성합니다. 그 안에 미션 단위로 폴더를 만들어 과제를 업로드합니다. 이때 각 과제 파일명은 날짜-algorithm.js로 만들어주세요.

```plain
leeyohan/
    0304-algorithm.js
    0312-algorithm.js
    0319-algorithm.js
    0326-algorithm.js
    0402-algorithm.js
```

3. add, commit한 다음, fork한 repository(origin)로 push합니다.

```bash
git add .
git commit -m "feat: Add assignment 1-3"
git push origin master
```

4. 브라우저에서 fork한 원격 repository로 접속 후 원본 repository에 대한 pull request를 생성합니다.

![Submit_Assignment_1](../assets/Submit_Assignment_1.png)

![Submit_Assignment_2](../assets/Submit_Assignment_2.png)

![Submit_Assignment_3](../assets/Submit_Assignment_3.png)

## 코드 리뷰 진행 및 반영하기

1. 원본 repository의 `pull request` 패널에서 코드 리뷰를 진행합니다.

![Review_Assignment_1](../assets/Review_Assignment_1.png)

2. 수정 요구 사항이 있다면 반영한 후 add, commit, push합니다. 만약 이전에 요청한 pull request가 아직 닫히지 않았다면, push까지만 진행하는 것으로도 변경 사항이 이전 pull request에 즉시 반영됩니다.

## 내 로컬 repository를 중앙 원격 repository(upstream)와 동기화하기

1. 터미널에서 다음 명령을 실행하면 로컬 repository의 master 브랜치를 중앙 원격 repository(upstream)의 master 브랜치와 동기화할 수 있습니다.

```bash
git pull upstream master
```
