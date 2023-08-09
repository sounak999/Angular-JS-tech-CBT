## Angular "Scope" 
1. 
![Alt text](image.png)

2. 
![Alt text](image-1.png)

3. 
![Alt text](image-2.png)

4. 
![Alt text](image-3.png)

5.
![Alt text](image-4.png)

## Using Angular "scope" in controller

![Alt text](image-5.png)


## How to Access a particular scope using Dev Tools

using  ```$0```  in console, we get the current element that is selected

to get the scope in angular we write   ```angular.element($0).scope()```

### Update values
```angular.element($0).scope.Name = "Sounak"```

to reflect the changes, we need to run digest method --> ```angular.element($0).scope.$digest()```


## Different Syntaxes

1. 
![Alt text](image-6.png)

2.
![Alt text](image-7.png)

3.
![Alt text](image-8.png)