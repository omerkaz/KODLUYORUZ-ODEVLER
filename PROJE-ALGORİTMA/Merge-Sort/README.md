##  Merge Sort Algoritma Ödevi
###  Proje 2

[16,21,11,8,12,22] -> Merge Sort

1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.

---

**1. Soru Cevap  [16,21,11,8,12,22]**

*              [16,21,11,8,12,22]
                   /         \
            [16,21,11]    [8,12,22]  
              /    \         /   \
        [16,21]   [11]    [8,12]  [22]
          /    \    |      /  \     |
        [16]  [21] [11]  [8] [12] [22]
          \    /    |     \   /     |
          [16,21]  [11]   [8,12]  [22]
              \     /        \     /
            [11,16,21]      [8,12,22]
                 \             /
                [8,11,12,16,21,22]
                
* Veri dizisini, elde edilen parçalar 2 ya da daha az değer içerene dek böleriz. Sonrasında ise bölünmüş bu parçaları birleştirirken içerdikleri değere bakıp küçük büyüğe doğru sıralayarak birleştiririz.

**2. Soru Cevap**
Diziyi hep ikiye bölünmektedir. Her bölünmüş dizinin Merge işlemi için de dizinin uzunluğu olan N işlem yapıldığından Big O Notation **O(n*logn)** olacaktır.

       
         