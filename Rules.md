## Conventions

#### 모든 작업내용은 다음과 같은 순서를 통해 계획과 수행이 이루어집니다. 
1. GitHub Project에 작업 항목을 추가합니다.
2. 추가한 항목의 Title, Content를 아래 규칛을 참고해 작성한 뒤, `Convert to Issue` 메뉴를 이용해 `GDSC-CAU/GDSC-SPACE` 레포지토리의 Issue로 등록합니다.
3. Fork된 Repository에서 해당 작업에 대한 Branch를 분리하여 작업을 진행합니다. 이 때, Branch 이름과 Commit 메시지의 규칙은 아래 내용을 따릅니다.
4. 작업이 완료되면, `GDSC-CAU/GDSC-SPACE` 레포지토리로 PR을 등록합니다. 마찬가지로 아래 규칙을 참고합니다.
5. Code-Review 이후, 변경 요청사항이 있다면 기존 Branch로 다시 `checkout`하여 작업을 마무리합니다.
6. 마지막에 Approve한 Reviewer가 해당 PR을 Main Branch에 Merge 합니다.

---

### Commit Rule
```
__Action__ __FileName__ : __Description__
```
- Action 은 다음과 같이 두가지 종류로 구분됩니다.
    - Added : 새로운 파일을 추가한 경우
    - Update : 특정 파일을 수정한 경우
    - Remove : 특정 파일을 삭제한 경우
- FileName 은 추가 혹은 수정한 파일의 이름을 의미합니다.
    - Gradle, Gitignore과 같이 프로젝트 전역의 설정 파일을 수정하거나 패키지 혹은 라이브러리를 추가한 경우에는 ```Update Project```와 같이 작성합니다.
- Description 은 Commit에서 변경된 내용을 한 문장으로 요약합니다.

#### Commit Example
```
Added README.md
Added LoginPage.tsx
```
```
Update MainActivity : Added Login Button on Base Component
Update Login.tsx : Adjust Input Box Styling
```
```
Update Project : Set Gradle Version to 7.3.1
Update Project : Added Retrofit Library from Maven
```

---

### Issue / PR Rule

#### Title
```
[TYPE] TITLE
```
- TYPE 은 다음 중 하나를 선택합니다.
    - DEV : 일반적인 개발 사항
    - FIX : 기존에 개발된 내용을 수정하는 사항
    - DOC : README 등 문서에 관련된 사항

####  Content
```markdown
## Summary
Summary of Issue or PR

## Description
Detail Description of Issue or PR
```
- Description 항목이 불필요한 경우에는 생략할 수 있습니다. 단, PR의 경우에는 생략 없이 최대한 상세히 적어주시기 바랍니다.
- FIX Issue 혹은 UI에 관련된 PR의 경우는, Description에 스크린샷을 첨부해주시기 바랍니다.
- Issue 작성은 직접 하는것이 아닌, GitHub Project에서 먼저 추가하고, `Convert to Issue` 기능을 이용합니다.
이 때, 우측 메뉴에서 Assignees와 Label을 지정합니다.
- PR 작성 시, 우측 메뉴에서 Assignees와 Label, Reviewer을 지정하고, 해당하는 Issue를 Development 항목에 지정해줍니다.

[Issue Example 1](https://github.com/yymin1022/Wa_API/issues/59) /
[Issue Example 2](https://github.com/yymin1022/TaxiMeter/issues/1)

[PR Example 1](https://github.com/DefCon-Apps/Military_License/pull/21) /
[PR Example 2](https://github.com/DefCon-Apps/Military_License/pull/22) /
[PR Example 3](https://github.com/DefCon-Apps/Military_License/pull/24)

---

### Branch Rule
```
TYPE/BRANCH_NAME
```
- 기본적으로 Branch의 이름은 Issue의 이름을 따릅니다.
- TYPE은 다음 중 하나를 해당하는 Issue의 Type과 동일하게 선택합니다.
    - dev : 일반적인 개발 사항
    - fix : 기존에 개발된 내용을 수정하는 사항
    - doc : README 등 문서에 관련된 사항
- BRANCH_NAME은 해당하는 Issue의 Title을 적절히 변형합니다.

#### Branch Example
```
dev/base-activity
```
```
docs/readme-base
```
```
fix/login-ui-styling
```