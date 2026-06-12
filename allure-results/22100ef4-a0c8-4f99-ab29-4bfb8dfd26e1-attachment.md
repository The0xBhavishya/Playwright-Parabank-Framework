# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS10UnauthorizedAccess.spec.ts >> TS-10 Unauthorized Page Access
- Location: tests\ui\TS10UnauthorizedAccess.spec.ts:3:5

# Error details

```
Error: expect(received).toBeFalsy()

Received: true
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
      - generic [ref=e44]:
        - heading "Error!" [level=1] [ref=e45]
        - paragraph [ref=e46]: An internal error has occurred and has been logged.
  - generic [ref=e48]:
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Home" [ref=e51] [cursor=pointer]:
          - /url: index.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - text: "|"
      - listitem [ref=e52]:
        - link "About Us" [ref=e53] [cursor=pointer]:
          - /url: about.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - text: "|"
      - listitem [ref=e54]:
        - link "Services" [ref=e55] [cursor=pointer]:
          - /url: services.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - text: "|"
      - listitem [ref=e56]:
        - link "Products" [ref=e57] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e58]:
        - link "Locations" [ref=e59] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e60]:
        - link "Forum" [ref=e61] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e62]:
        - link "Site Map" [ref=e63] [cursor=pointer]:
          - /url: sitemap.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
        - text: "|"
      - listitem [ref=e64]:
        - link "Contact Us" [ref=e65] [cursor=pointer]:
          - /url: contact.htm;jsessionid=C63893A7D8FF15B95A0B720F0FC3A998
    - paragraph [ref=e66]: © Parasoft. All rights reserved.
    - list [ref=e67]:
      - listitem [ref=e68]: "Visit us at:"
      - listitem [ref=e69]:
        - link "www.parasoft.com" [ref=e70] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test('TS-10 Unauthorized Page Access', async ({ page }) => {
  4  | 
  5  |     let accessGranted = true;
  6  | 
  7  |     try {
  8  | 
  9  |         await page.goto(
  10 |             'https://parabank.parasoft.com/parabank/openaccount.htm'
  11 |         );
  12 | 
  13 |     } catch {
  14 | 
  15 |         accessGranted = false;
  16 |     }
  17 | 
  18 |     expect(accessGranted)
> 19 |         .toBeFalsy();
     |          ^ Error: expect(received).toBeFalsy()
  20 | });
```