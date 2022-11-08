//
//  View.swift
//  appClone
//
//  Created by TuPT on 08/11/2022.
//

import UIKit
class NativeViewCustom: UIView {
  @objc var url:String?{
    didSet{
      numberLabel.text = url
    }
  }
  var numberLabel:UILabel!
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupView()
  }
  
  func setupView(){
    numberLabel = UILabel()
    numberLabel.font = .systemFont(ofSize: 40)
    numberLabel.translatesAutoresizingMaskIntoConstraints = false
    numberLabel.textAlignment = .center
    numberLabel.text = "Test Native UI Component"
    self.addSubview(numberLabel)
  }
}
