##  İnsertion Sort Algoritma Ödevi
###  Proje 1


[22,27,16,2,18,6] -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.
3. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.


5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

---

**1. Soru Cevap  [22,27,16,2,18,6]**

* 1. Adım (22,27,16,2,18,6) 

*27 ile 22'yi karşılaştırırız ve 27 22'den büyük olmadığı için yer değiştirmeyiz.*

* 2. Adım (16,22,27,2,18,6)

*Bu sefer key değerimiz 16 ve 16 ile solundaki değerleri teker teker karşılaştırırız. 27 ve 22'den küçük olduğunu için en başa alırız.*

* 3. Adım (2,16,22,27,18,6)

*Key değerimiz 2. Solundaki değerler ile karşılaştırırız ve hepsinden küçük olduğu için en başa alırız.*

* 4. Adım (2,16,18,22,27,6)

*Key değerimiz 18. Solundaki değerler ile karşılaştırırız ve 16'dan büyük olduğu için 16'nın sağına yazarız.*

* 5. Adım (2,6,16,18,22,27)

*Key değerimiz 6. Solundaki değerler ile karşılatırırız ve 2'den büyük olduğu için 2. sıraya yazarız.*

---

**2. Soru Cevap**

* O(n^2)'dir.

---

**3. Soru Cevap**
* Worst Case: 1'den N'e kadar tüm verilerin dolaşılması gerekeceği için n(n+1)/2 -- n^2+n olur bu da Big O Notation değerini **O(n^2)** olarak verir.

* Avarage Case: Veri dizisi kısmen karışık durumdadır. Big O Notation **O(n^2)** olur.

* Best Case: Veri dizisi sıralı haldedir ve dizi sadece n kadar kontrol edilir bu durumda da Big O Notation değeri **O(n)** olur.

---

**4. Soru Cevap**

* 18 Sayısı veri dizisinin ortasında yer aldığı için Avarage Case kapsamına girer.

**5. Soru Cevap [7,3,5,8,2,9,4,15,6]** 

* 1. Adım (3,7,5,8,2,9,4,15,6) 

*3 ile 7'yi karşılaştırırız ve 3 7'den küçük olduğu için yer değiştiririz.*

* 2. Adım (3,5,7,8,2,9,4,15,6)

*Bu sefer key değerimiz 5 ve 5 ile solundaki değerleri teker teker karşılaştırırız. 7'den küçük olduğunu için 7'nin soluna alırız.*

* 3. Adım (3,5,7,8,2,9,4,15,6)

*Key değerimiz 8. Solundaki değerler ile karşılaştırırız ve hiçbirinden küçük olmadığı için olduğu yerde bırakırız.*

* 4. Adım (2,3,5,7,8,9,4,15,6)

*Key değerimiz 2. Solundaki değerler ile karşılaştırırız ve solundaki tüm değerlerden küçük olduğu için 3'ün soluna yazarız.*

* 5. Adım (2,3,5,7,8,9,4,15,6)

*Key değerimiz 9. Solundaki değerler ile karşılatırırız ve hepsinden büyük olduğu için olduğu yerde bırakırız.*

* 6. Adım (2,3,4,5,7,8,9,15,6)

*Key değerimiz 4. Solundaki değerler ile karşılaştırırız ve 3'ten büyük olduğu için 3'ün sağına alırız.*

* 7. Adım (2,3,4,5,7,8,9,15,6)

*Key değerimiz 15. Solundaki değerler ile karşılaştırırız `tam burada sorunun ilk 4 adımı yazınız dediğini hatırladım hehehe`